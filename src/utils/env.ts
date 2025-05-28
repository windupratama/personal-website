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
        NODE_ENV: z.enum(["development", "production", "test"]),
    },
    client: {
        // Client environment variables
        NEXT_PUBLIC_APP_NAME: z.string().min(1),
        NEXT_PUBLIC_APP_DESCRIPTION: z.string().min(1),
        NEXT_PUBLIC_APP_VERSION: z.string().min(1),
        NEXT_PUBLIC_APP_AUTHOR: z.string().min(1),
        NEXT_PUBLIC_APP_URL: z.string().min(1),
    },
    runtimeEnv: {
        // Server runtime environment variables
        NODE_ENV: process.env.NODE_ENV,
        // Client runtime environment variables
        NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
        NEXT_PUBLIC_APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
        NEXT_PUBLIC_APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION,
        NEXT_PUBLIC_APP_AUTHOR: process.env.NEXT_PUBLIC_APP_AUTHOR,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    },
});
