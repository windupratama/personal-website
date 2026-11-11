import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/**
 * Environment variables configuration
 */
export const env = createEnv({
    server: {
        // Server environment variables
        NODE_ENV: z
            .enum(["development", "production", "test"])
            .default("development"),
    },
    client: {
        // Client environment variables
        NEXT_PUBLIC_APP_NAME: z.string().default("M. Windu Pratama"),
        NEXT_PUBLIC_APP_DESCRIPTION: z
            .string()
            .default("M. Windu Pratama's personal website."),
        NEXT_PUBLIC_APP_VERSION: z.string().default("0.1.0"),
        NEXT_PUBLIC_APP_VERSION_CODENAME: z.string().default("Rain"),
        NEXT_PUBLIC_APP_AUTHOR: z.string().default("M. Windu Pratama"),
        NEXT_PUBLIC_APP_URL: z.url().default("http://localhost:3000"),
    },
    runtimeEnv: {
        // Server runtime environment variables
        NODE_ENV: process.env.NODE_ENV,
        // Client runtime environment variables
        NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
        NEXT_PUBLIC_APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
        NEXT_PUBLIC_APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION,
        NEXT_PUBLIC_APP_VERSION_CODENAME:
            process.env.NEXT_PUBLIC_APP_VERSION_CODENAME,
        NEXT_PUBLIC_APP_AUTHOR: process.env.NEXT_PUBLIC_APP_AUTHOR,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    },
});
