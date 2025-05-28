/**
 * A dynamic sitemap.xml generator
 *
 * Define a list of application URLs that can be crawled by search engines
 */

import type { MetadataRoute } from "next";
import { env } from "@/utils/env";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: env.NEXT_PUBLIC_APP_URL,
            lastModified: new Date(),
        },
    ];
}
