/**
 * A utility to seed the database with initial data
 */

import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

async function main() {
    // Seeder goes here ...
}

main()
    .then(async () => {
        console.log("✅ Database seeded successfully!");
        await prisma.$disconnect();
    })
    .catch(async (error) => {
        console.error("❌ Error while seeding the database:", "\n", error);
        await prisma.$disconnect();
        process.exit(1);
    });
