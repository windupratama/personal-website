/**
 * A dynamic manifest.json generator
 *
 * Define application web manifest metadata
 */

import { env } from "@/utils/env";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: env.NEXT_PUBLIC_APP_NAME,
        short_name: env.NEXT_PUBLIC_APP_NAME,
        description: env.NEXT_PUBLIC_APP_DESCRIPTION,
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#155dfc",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "48x48",
                type: "image/x-icon",
            },
            {
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
