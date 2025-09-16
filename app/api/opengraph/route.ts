import { NextRequest, NextResponse } from "next/server";
import ogs from "open-graph-scraper";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { error: "URL parameter is required" },
      { status: 400 }
    );
  }

  try {
    const { result } = await ogs({
      url: url,
      onlyGetOpenGraphInfo: true,
      timeout: 10000,
    });

    return NextResponse.json({
      success: true,
      data: {
        ogImage: result.ogImage?.[0]?.url || null,
        ogDescription: result.ogDescription || null,
        ogTitle: result.ogTitle || null,
        author: result.author || result.ogSiteName || null,
        ogSiteName: result.ogSiteName || null,
      },
    });
  } catch (error) {
    console.error(`Failed to fetch OpenGraph data for ${url}:`, error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch OpenGraph data",
        data: {
          ogImage: null,
          ogDescription: null,
          ogTitle: null,
          author: null,
          ogSiteName: null,
        },
      },
      { status: 200 } // Return 200 with fallback data
    );
  }
}
