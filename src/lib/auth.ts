/**
 * Better Auth server instance configurations
 */

import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import { env } from "@/utils/env";

/**
 * Better Auth server instance
 */
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
        disableSignUp: !env.NEXT_PUBLIC_ENABLE_SIGN_UP,
    },
    advanced: {
        database: {
            // Disable Better Auth automatic ID generation as Prisma ORM will handle it
            generateId: false,
        },
    },
});
