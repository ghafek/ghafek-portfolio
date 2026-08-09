import { NextResponse } from "next/server";
import { getViews, incrementViews, isValidPost, viewsConfigured } from "@/lib/views";

type RouteContext = {
  params: Promise<{ lang: string; slug: string }>;
};

export async function GET(_request: Request, { params }: RouteContext) {
  const { lang, slug } = await params;
  if (!isValidPost(lang, slug)) {
    return NextResponse.json({ error: "unknown post" }, { status: 404 });
  }
  if (!viewsConfigured) {
    return NextResponse.json({ error: "views not configured" }, { status: 503 });
  }
  const views = await getViews(lang, slug);
  return NextResponse.json({ views });
}

export async function POST(_request: Request, { params }: RouteContext) {
  const { lang, slug } = await params;
  if (!isValidPost(lang, slug)) {
    return NextResponse.json({ error: "unknown post" }, { status: 404 });
  }
  if (!viewsConfigured) {
    return NextResponse.json({ error: "views not configured" }, { status: 503 });
  }
  const views = await incrementViews(lang, slug);
  return NextResponse.json({ views });
}
