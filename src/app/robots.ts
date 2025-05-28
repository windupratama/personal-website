/**
 * A dynamic robots.txt generator
 *
 * Define a rules for which application URLs can be crawled by search engines
 */

import type { MetadataRoute } from "next";
import { env } from "@/utils/env";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/private/"],
        },
        sitemap: `${env.NEXT_PUBLIC_APP_URL}/sitemap.xml`,
    };
}
