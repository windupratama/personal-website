import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(["development", "production", "test"])
    },
    client: {
        NEXT_PUBLIC_APP_NAME: z.string().min(1),
        NEXT_PUBLIC_APP_DESCRIPTION: z.string().min(1),
        NEXT_PUBLIC_APP_AUTHOR: z.string().min(1),
        NEXT_PUBLIC_APP_VERSION: z.string().min(1),
        NEXT_PUBLIC_APP_URL: z.string().min(1)
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
        NEXT_PUBLIC_APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
        NEXT_PUBLIC_APP_AUTHOR: process.env.NEXT_PUBLIC_APP_AUTHOR,
        NEXT_PUBLIC_APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL
    }
});