#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const ogs = require("open-graph-scraper");

// 設定
const ANNOUNCEMENTS_DIR = path.join(__dirname, "../content/announcements");
const METADATA_CACHE_FILE = path.join(
  __dirname,
  "../content/announcements-metadata.json"
);

// OpenGraphデータを取得する関数
async function fetchOpenGraphData(url) {
  try {
    console.log(`Fetching metadata for: ${url}`);
    const { result } = await ogs({
      url: url,
      onlyGetOpenGraphInfo: true,
      timeout: {
        request: 10000,
      },
    });

    return {
      image: Array.isArray(result.ogImage)
        ? result.ogImage[0]?.url || null
        : typeof result.ogImage === "string"
        ? result.ogImage
        : result.ogImage?.url || null,
      description: result.ogDescription || null,
      title: result.ogTitle || null,
      author: result.author || result.ogSiteName || null,
    };
  } catch (error) {
    console.error(`Failed to fetch metadata for ${url}:`, error.message);
    return {
      image: null,
      description: null,
      title: null,
      author: null,
    };
  }
}

// 既存のメタデータキャッシュを読み込む
function loadMetadataCache() {
  try {
    if (fs.existsSync(METADATA_CACHE_FILE)) {
      const data = fs.readFileSync(METADATA_CACHE_FILE, "utf8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.warn("Failed to load metadata cache:", error.message);
  }
  return {};
}

// メタデータキャッシュを保存
function saveMetadataCache(cache) {
  try {
    fs.writeFileSync(METADATA_CACHE_FILE, JSON.stringify(cache, null, 2));
    console.log(`Metadata cache saved to ${METADATA_CACHE_FILE}`);
  } catch (error) {
    console.error("Failed to save metadata cache:", error.message);
  }
}

// announcementsディレクトリ内のすべてのMDXファイルを取得
function getAnnouncementFiles() {
  try {
    const files = fs.readdirSync(ANNOUNCEMENTS_DIR);
    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => path.join(ANNOUNCEMENTS_DIR, file));
  } catch (error) {
    console.error("Failed to read announcements directory:", error.message);
    return [];
  }
}

// MDXファイルのfrontmatterを解析
function parseFrontmatter(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);

    if (!frontmatterMatch) {
      return null;
    }

    const frontmatter = frontmatterMatch[1];
    const metadata = {};

    frontmatter.split("\n").forEach((line) => {
      const match = line.match(/^(\w+):\s*(.+)$/);
      if (match) {
        const [, key, value] = match;
        metadata[key] = value.trim();
      }
    });

    return metadata;
  } catch (error) {
    console.error(
      `Failed to parse frontmatter for ${filePath}:`,
      error.message
    );
    return null;
  }
}

// MDXファイルのfrontmatterを更新
function updateFrontmatter(filePath, newMetadata) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);

    if (!frontmatterMatch) {
      console.warn(`No frontmatter found in ${filePath}`);
      return false;
    }

    const existingFrontmatter = frontmatterMatch[1];
    const afterFrontmatter = content.substring(frontmatterMatch[0].length);

    // 既存のメタデータを更新
    let updatedFrontmatter = existingFrontmatter;
    Object.entries(newMetadata).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        const regex = new RegExp(`^${key}:.*$`, "m");
        if (regex.test(updatedFrontmatter)) {
          // 既存のキーを更新
          updatedFrontmatter = updatedFrontmatter.replace(
            regex,
            `${key}: ${value}`
          );
        } else {
          // 新しいキーを追加
          updatedFrontmatter += `\n${key}: ${value}`;
        }
      }
    });

    const newContent = `---\n${updatedFrontmatter}\n---${afterFrontmatter}`;
    fs.writeFileSync(filePath, newContent, "utf8");
    return true;
  } catch (error) {
    console.error(
      `Failed to update frontmatter for ${filePath}:`,
      error.message
    );
    return false;
  }
}

// メイン処理
async function main() {
  console.log("Starting metadata fetch for announcements...");

  const cache = loadMetadataCache();
  const files = getAnnouncementFiles();
  let updatedCount = 0;

  for (const filePath of files) {
    const fileName = path.basename(filePath);
    console.log(`\nProcessing ${fileName}...`);

    const frontmatter = parseFrontmatter(filePath);
    if (!frontmatter || !frontmatter.url) {
      console.warn(`No URL found in ${fileName}, skipping...`);
      continue;
    }

    const url = frontmatter.url;
    const cacheKey = url;

    // キャッシュをチェック
    if (cache[cacheKey] && !process.argv.includes("--force")) {
      console.log(`Using cached metadata for ${url}`);
      const cachedMetadata = cache[cacheKey];

      // キャッシュされたメタデータでファイルを上書き更新
      const updateData = {};
      if (cachedMetadata.image) updateData.image = cachedMetadata.image;
      if (cachedMetadata.description)
        updateData.description = cachedMetadata.description;
      if (cachedMetadata.title) updateData.title = cachedMetadata.title;
      if (cachedMetadata.author) updateData.author = cachedMetadata.author;

      if (Object.keys(updateData).length > 0) {
        if (updateFrontmatter(filePath, updateData)) {
          console.log(`Updated ${fileName} with cached metadata`);
          updatedCount++;
        }
      } else {
        console.log(`No metadata available for ${fileName}`);
      }
    } else {
      // 新しいメタデータを取得
      console.log(`Fetching fresh metadata for ${url}...`);
      const metadata = await fetchOpenGraphData(url);

      // キャッシュを更新
      cache[cacheKey] = metadata;

      // ファイルを上書き更新
      const updateData = {};
      if (metadata.image) updateData.image = metadata.image;
      if (metadata.description) updateData.description = metadata.description;
      if (metadata.title) updateData.title = metadata.title;
      if (metadata.author) updateData.author = metadata.author;

      if (Object.keys(updateData).length > 0) {
        if (updateFrontmatter(filePath, updateData)) {
          console.log(`Updated ${fileName} with fresh metadata`);
          updatedCount++;
        }
      } else {
        console.log(`No metadata available for ${fileName}`);
      }

      // リクエスト間隔を空ける（API制限対策）
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  // キャッシュを保存
  saveMetadataCache(cache);

  console.log(`\nCompleted! Updated ${updatedCount} files.`);
  console.log(`Metadata cache saved to: ${METADATA_CACHE_FILE}`);
}

// スクリプト実行
if (require.main === module) {
  main().catch((error) => {
    console.error("Error:", error);
    process.exit(1);
  });
}

module.exports = { fetchOpenGraphData, loadMetadataCache, saveMetadataCache };
