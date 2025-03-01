import { env } from "@/utils/env";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: env.NEXT_PUBLIC_APP_URL,
            lastModified: new Date()
        }
    ];
}
