import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Perssons El",
    short_name: "Perssons El",
    description: "Elektriker i Helsingborg",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f6fa",
    theme_color: "#313d8d",
    lang: "sv-SE",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
