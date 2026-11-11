import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    cacheComponents: true,
    partialPrefetching: true,
    turbopack: {
        rules: {
            "*.css": {
                loaders: ["@tailwindcss/turbopack"],
                as: "*.css",
            },
        },
    },
    compiler: {
        removeConsole:
            process.env.NODE_ENV === "production"
                ? { exclude: ["error"] }
                : false,
    },
    // When using Docker, should set output to "standalone"
    output: undefined,
    transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
};

export default nextConfig;
