/**
 * A utility to seed the database with initial data
 */

import { PrismaClient } from "@/generated/prisma";
import { runSeeder } from "@/utils/runSeeder";
import { userSeeder } from "./seeds/user.seed";

const prisma = new PrismaClient();

async function main() {
    // List all the seeder here
    const seeders = [
        {
            name: "User Seeder",
            handler: userSeeder,
        },
    ];

    // Run all the seeders
    for (const seeder of seeders) {
        await runSeeder(seeder);
    }
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
