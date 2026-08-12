import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type GraphError = {
  error?: {
    message?: string;
    type?: string;
    code?: number;
    error_subcode?: number;
  };
};

async function checkGraphUrl(url: URL) {
  try {
    const response = await fetch(url, { cache: "no-store" });
    const payload = (await response.json()) as
      | { data?: unknown[] }
      | GraphError;

    if (!response.ok) {
      const error = "error" in payload ? payload.error : undefined;
      return {
        ok: false,
        status: response.status,
        error: {
          message: error?.message || "Meta API request failed.",
          type: error?.type,
          code: error?.code,
          subcode: error?.error_subcode,
        },
      };
    }

    return {
      ok: true,
      status: response.status,
      count: "data" in payload && Array.isArray(payload.data) ? payload.data.length : 0,
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      error: {
        message: error instanceof Error ? error.message : "Request failed.",
      },
    };
  }
}

export async function GET() {
  const facebookPageId = process.env.FACEBOOK_PAGE_ID || "";
  const facebookToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN || "";
  const facebookVersion = process.env.FACEBOOK_GRAPH_VERSION || "v23.0";
  const instagramUserId = process.env.INSTAGRAM_USER_ID || "";
  const instagramToken = process.env.INSTAGRAM_ACCESS_TOKEN || "";
  const instagramVersion = process.env.INSTAGRAM_GRAPH_VERSION || "v23.0";

  const facebookUrl =
    facebookPageId && facebookToken
      ? new URL(
          `https://graph.facebook.com/${facebookVersion}/${facebookPageId}/posts`,
        )
      : null;
  facebookUrl?.searchParams.set(
    "fields",
    "id,message,full_picture,permalink_url,created_time",
  );
  facebookUrl?.searchParams.set("access_token", facebookToken);
  facebookUrl?.searchParams.set("limit", "2");

  const instagramUrl =
    instagramUserId && instagramToken
      ? new URL(
          `https://graph.facebook.com/${instagramVersion}/${instagramUserId}/media`,
        )
      : null;
  instagramUrl?.searchParams.set(
    "fields",
    "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp",
  );
  instagramUrl?.searchParams.set("access_token", instagramToken);
  instagramUrl?.searchParams.set("limit", "2");

  const [facebook, instagram] = await Promise.all([
    facebookUrl
      ? checkGraphUrl(facebookUrl)
      : Promise.resolve({ ok: false, status: 0, error: { message: "Missing Facebook env vars." } }),
    instagramUrl
      ? checkGraphUrl(instagramUrl)
      : Promise.resolve({ ok: false, status: 0, error: { message: "Missing Instagram env vars." } }),
  ]);

  return NextResponse.json(
    {
      env: {
        FACEBOOK_PAGE_ID: facebookPageId || null,
        FACEBOOK_PAGE_ACCESS_TOKEN: Boolean(facebookToken),
        FACEBOOK_GRAPH_VERSION: facebookVersion,
        INSTAGRAM_USER_ID: instagramUserId || null,
        INSTAGRAM_ACCESS_TOKEN: Boolean(instagramToken),
        INSTAGRAM_GRAPH_VERSION: instagramVersion,
        NEXT_PUBLIC_FACEBOOK_URL: process.env.NEXT_PUBLIC_FACEBOOK_URL || null,
      },
      facebook,
      instagram,
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
