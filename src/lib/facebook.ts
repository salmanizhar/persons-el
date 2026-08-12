import type { InstagramPost } from "@/lib/instagram";

const facebookUrl =
  process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/";

const fallbackPosts: InstagramPost[] = [
  {
    id: "facebook-garden-lighting",
    caption: "Trädgårdsbelysning som skapar en trygg och välkomnande utemiljö.",
    imageUrl: "/images/garden-lighting.jpg",
    permalink: facebookUrl,
    timestamp: "2026-07-01T10:00:00.000Z",
  },
  {
    id: "facebook-electrical-panel",
    caption: "En tydligt monterad elcentral för enklare och säkrare underhåll.",
    imageUrl: "/images/electrical-panel.jpg",
    permalink: facebookUrl,
    timestamp: "2026-06-20T10:00:00.000Z",
  },
  {
    id: "facebook-commercial-lighting",
    caption:
      "Arbetsbelysning installerad med fokus på funktion och en ren finish.",
    imageUrl: "/images/commercial-lighting.jpg",
    permalink: facebookUrl,
    timestamp: "2026-06-08T10:00:00.000Z",
  },
  {
    id: "facebook-renovation",
    caption: "Ny kabeldragning under renovering, dokumenterad från början.",
    imageUrl: "/images/renovation.jpg",
    permalink: facebookUrl,
    timestamp: "2026-05-24T10:00:00.000Z",
  },
];

type FacebookApiPost = {
  id?: string;
  message?: string;
  full_picture?: string;
  permalink_url?: string;
  created_time?: string;
};

export async function getFacebookPosts(): Promise<InstagramPost[]> {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const accessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
  if (!pageId || !accessToken) return fallbackPosts;

  const version = process.env.FACEBOOK_GRAPH_VERSION || "v23.0";
  const url = new URL(`https://graph.facebook.com/${version}/${pageId}/posts`);
  url.searchParams.set(
    "fields",
    "id,message,full_picture,permalink_url,created_time",
  );
  url.searchParams.set("access_token", accessToken);
  url.searchParams.set("limit", "8");

  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) return fallbackPosts;
    const payload = (await response.json()) as { data?: FacebookApiPost[] };
    const posts = (payload.data || [])
      .map((post): InstagramPost | null => {
        if (!post.id || !post.full_picture || !post.permalink_url) return null;
        return {
          id: post.id,
          caption: post.message || "Senaste nytt från Perssons El.",
          imageUrl: post.full_picture,
          permalink: post.permalink_url,
          timestamp: post.created_time || new Date().toISOString(),
        };
      })
      .filter((post): post is InstagramPost => post !== null);
    return posts.length ? posts : fallbackPosts;
  } catch {
    return fallbackPosts;
  }
}
