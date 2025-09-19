# メタデータ取得スクリプト

このディレクトリには、announcements/\*.mdx ファイルのメタデータを事前に取得・更新するためのスクリプトが含まれています。

## 使用方法

### 基本的な使用方法

```bash
# メタデータを取得・更新
pnpm run getmeta
```

### オプション

```bash
# キャッシュを無視して強制的に再取得
pnpm run getmeta -- --force
```

## 機能

- `announcements/*.mdx`ファイルの URL から OpenGraph メタデータを取得
- 取得したメタデータを MDX ファイルの frontmatter に自動上書き追加
- メタデータキャッシュ機能（`content/announcements-metadata.json`）
- 既存のメタデータがある場合も上書き更新（`--force`オプションで強制再取得）

## 取得されるメタデータ

- `image`: OpenGraph 画像 URL
- `description`: ページの説明
- `title`: ページタイトル
- `author`: 作成者またはサイト名

## ファイル構成

- `getmeta.js`: メインスクリプト
- `content/announcements-metadata.json`: メタデータキャッシュファイル（自動生成）

## 注意事項

- スクリプト実行時は API 制限を考慮して 1 秒間隔でリクエストを送信します
- キャッシュファイルは`content/announcements-metadata.json`に保存されます
- 既存の frontmatter にメタデータがある場合も上書き更新されます
- `--force`オプションを使用すると、キャッシュを無視して強制的に再取得します
