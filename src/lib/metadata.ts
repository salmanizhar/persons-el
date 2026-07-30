import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "sv_SE",
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
      url: path,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: ["/opengraph-image"],
    },
  };
}
