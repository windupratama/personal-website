/**
 * A utility to run database seeders
 */

interface SeederProps<T> {
    name: string;
    handler: () => Promise<(T | "skipped")[]>;
}

/**
 * A utility function to run database seeders
 */
export async function runSeeder<T>({ name, handler }: SeederProps<T>) {
    // Seed seeder data
    console.log(`🌱 Seeding ${name} data...`);

    // Seed the data by calling the handler
    const seeder = await handler();

    // Check and log the seeder status
    // Get created and skipped count
    const created = seeder.filter(
        (data) => data !== null && data !== "skipped",
    ).length;
    const skipped = seeder.filter((data) => data === "skipped").length;

    if (created == 0) {
        console.warn(`🟡 Skipping ${name}, no data were seeded!`);
    } else {
        console.log(
            `✅ Successfully seeded ${name} (${created} created, ${skipped} skipped)`,
        );
    }
}
