import { Redis } from "@upstash/redis";
import { postsByLocale } from "@/app/blog/posts";
import { isLocale } from "@/lib/i18n";

// The Vercel Upstash integration injects KV_*-named variables by default;
// a manually created Upstash database uses UPSTASH_*-named ones.
const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

export const viewsConfigured = Boolean(url && token);

const redis = viewsConfigured ? new Redis({ url: url!, token: token! }) : null;

// Preview deployments and local dev share the database with production,
// so counts are namespaced per environment to keep production numbers clean.
const namespace = process.env.VERCEL_ENV === "production" ? "prod" : "dev";

export function isValidPost(lang: string, slug: string): boolean {
  if (!isLocale(lang)) return false;
  return postsByLocale[lang].some((post) => post.slug === slug);
}

function viewsKey(lang: string, slug: string): string {
  return `views:${namespace}:${lang}:${slug}`;
}

export async function getViews(lang: string, slug: string): Promise<number> {
  if (!redis) return 0;
  return (await redis.get<number>(viewsKey(lang, slug))) ?? 0;
}

export async function incrementViews(lang: string, slug: string): Promise<number> {
  if (!redis) return 0;
  return redis.incr(viewsKey(lang, slug));
}
