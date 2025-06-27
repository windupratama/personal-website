/**
 * Prisma ORM client instance configurations
 */

import { PrismaClient } from "@/generated/prisma";
import { env } from "@/utils/env";

const globalForPrisma = global as unknown as {
    prisma: PrismaClient;
};

/**
 * Prisma ORM client instance
 */
const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        // Configure logging based on the environment
        // In development, log all info, warnings, and errors
        // In production, log only errors
        log:
            env.NODE_ENV === "development"
                ? ["info", "warn", "error"]
                : ["error"],
    });

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
