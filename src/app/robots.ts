/**
 * a dynamic robots.txt generator
 * define a rules for which application URLs can be crawled by search engines
 **/

import { env } from "@/utils/env";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/"
        },
        sitemap: `${env.NEXT_PUBLIC_APP_URL}/sitemap.xml`
    };
}
