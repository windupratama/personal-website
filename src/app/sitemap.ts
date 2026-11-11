import { env } from "@/configs/env";
import type { MetadataRoute } from "next";

/**
 * sitemap.xml configuration
 */
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: env.NEXT_PUBLIC_APP_URL,
            lastModified: new Date(),
        },
    ];
}
