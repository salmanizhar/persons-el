export type InstagramPost = {
  id: string;
  caption: string;
  imageUrl: string;
  permalink: string;
  timestamp: string;
};

const fallbackPosts: InstagramPost[] = [
  {
    id: "garden-lighting",
    caption:
      "Trädgårdsbelysning installerad för en tryggare och mer välkomnande utemiljö.",
    imageUrl: "/images/garden-lighting.jpg",
    permalink: "https://www.instagram.com/perssons_el/",
    timestamp: "2026-07-01T10:00:00.000Z",
  },
  {
    id: "electrical-panel",
    caption:
      "En tydligt monterad elcentral gör anläggningen enklare att förstå och underhålla.",
    imageUrl: "/images/electrical-panel.jpg",
    permalink: "https://www.instagram.com/perssons_el/",
    timestamp: "2026-06-20T10:00:00.000Z",
  },
  {
    id: "commercial-lighting",
    caption:
      "Arbetsbelysning planerad för funktion, trivsel och en ren installation.",
    imageUrl: "/images/commercial-lighting.jpg",
    permalink: "https://www.instagram.com/perssons_el/",
    timestamp: "2026-06-08T10:00:00.000Z",
  },
  {
    id: "renovation",
    caption:
      "Ny kabeldragning under renovering – förberett och dokumenterat från början.",
    imageUrl: "/images/renovation.jpg",
    permalink: "https://www.instagram.com/perssons_el/",
    timestamp: "2026-05-24T10:00:00.000Z",
  },
];

type InstagramApiPost = {
  id?: string;
  caption?: string;
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  timestamp?: string;
};

export async function getInstagramPosts(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!token || !userId) return fallbackPosts;

  const version = process.env.INSTAGRAM_GRAPH_VERSION || "v23.0";
  const url = new URL(`https://graph.instagram.com/${version}/${userId}/media`);
  url.searchParams.set(
    "fields",
    "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp",
  );
  url.searchParams.set("access_token", token);
  url.searchParams.set("limit", "8");

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });
    if (!response.ok) return fallbackPosts;

    const payload = (await response.json()) as { data?: InstagramApiPost[] };
    const posts = (payload.data || [])
      .map((post): InstagramPost | null => {
        const imageUrl =
          post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url;
        if (!post.id || !imageUrl || !post.permalink) return null;
        return {
          id: post.id,
          caption: post.caption || "Senaste nytt från Perssons El.",
          imageUrl,
          permalink: post.permalink,
          timestamp: post.timestamp || new Date().toISOString(),
        };
      })
      .filter((post): post is InstagramPost => post !== null);

    return posts.length ? posts : fallbackPosts;
  } catch {
    return fallbackPosts;
  }
}
