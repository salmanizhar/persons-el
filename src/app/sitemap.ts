import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{const staticRoutes=["","/tjanster","/projekt","/om-oss","/kontakt","/integritetspolicy"];return [...staticRoutes,...services.map(s=>`/tjanster/${s.slug}`)].map(path=>({url:`${site.url}${path}`,lastModified:new Date(),changeFrequency:path===""?"weekly":"monthly",priority:path===""?1:path.startsWith("/tjanster")?0.8:0.6}))}

