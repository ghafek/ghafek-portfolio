import { NextResponse } from "next/server";
import { getViews, incrementViews, isValidSlug, viewsConfigured } from "@/lib/views";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, { params }: RouteContext) {
  const { slug } = await params;
  if (!isValidSlug(slug)) {
    return NextResponse.json({ error: "unknown slug" }, { status: 404 });
  }
  if (!viewsConfigured) {
    return NextResponse.json({ error: "views not configured" }, { status: 503 });
  }
  const views = await getViews(slug);
  return NextResponse.json({ views });
}

export async function POST(_request: Request, { params }: RouteContext) {
  const { slug } = await params;
  if (!isValidSlug(slug)) {
    return NextResponse.json({ error: "unknown slug" }, { status: 404 });
  }
  if (!viewsConfigured) {
    return NextResponse.json({ error: "views not configured" }, { status: 503 });
  }
  const views = await incrementViews(slug);
  return NextResponse.json({ views });
}
