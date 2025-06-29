/**
 * A utility to ensure the environment variables are defined
 */

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/**
 * Defines the application environment variables
 */
export const env = createEnv({
    server: {
        // Server environment variables
        NODE_ENV: z
            .enum(["development", "production", "test"])
            .default("development"),
        DATABASE_URL: z.string().url().min(1),
        DATABASE_DIRECT_URL: z.string().url().optional().or(z.literal("")),
        BETTER_AUTH_SECRET: z.string().min(1),
        BETTER_AUTH_URL: z.string().url().min(1),
    },
    client: {
        // Client environment variables
        NEXT_PUBLIC_APP_NAME: z.string().min(1),
        NEXT_PUBLIC_APP_DESCRIPTION: z.string().min(1),
        NEXT_PUBLIC_APP_VERSION: z.string().min(1),
        NEXT_PUBLIC_APP_AUTHOR: z.string().min(1),
        NEXT_PUBLIC_APP_URL: z.string().min(1),
        NEXT_PUBLIC_ENABLE_SIGN_UP: z.boolean().default(true),
    },
    runtimeEnv: {
        // Server runtime environment variables
        NODE_ENV: process.env.NODE_ENV,
        DATABASE_URL: process.env.DATABASE_URL,
        DATABASE_DIRECT_URL: process.env.DATABASE_DIRECT_URL,
        BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
        BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
        // Client runtime environment variables
        NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
        NEXT_PUBLIC_APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
        NEXT_PUBLIC_APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION,
        NEXT_PUBLIC_APP_AUTHOR: process.env.NEXT_PUBLIC_APP_AUTHOR,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
        NEXT_PUBLIC_ENABLE_SIGN_UP:
            process.env.NEXT_PUBLIC_ENABLE_SIGN_UP?.toLocaleLowerCase() ===
            "true",
    },
});
