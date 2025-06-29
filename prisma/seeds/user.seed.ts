/**
 * A seed to populate the database with initial user data
 */

import { User, Account } from "@/generated/prisma";
import { PrismaClientKnownRequestError } from "@/generated/prisma/runtime/library";
import { auth } from "@/lib/auth";

type UserSeedType = Pick<User, "name" | "email"> &
    Partial<Pick<User, "image">> &
    Pick<Account, "password">;

/**
 * A user seed to populate the database with initial user data
 */
const users: UserSeedType[] = [
    {
        name: "Admin",
        email: "admin@mail.com",
        // Note: password hashing is handled by Better Auth
        password: "adminadmin",
    },
];

// A utility to seed the database with initial user data
export async function userSeeder() {
    return await Promise.all(
        users.map(async (userSeed) => {
            try {
                const { user } = await auth.api.signUpEmail({
                    body: {
                        email: userSeed.email,
                        name: userSeed.name,
                        password: userSeed.password as string,
                    },
                });
                return user;
            } catch (error) {
                // Handles prisma user already exists error
                if (error instanceof PrismaClientKnownRequestError) {
                    if (error.code === "P2002") {
                        return "skipped";
                    }
                    throw error;
                }

                // Handles Better Auth user already exists error
                if (
                    typeof error === "object" &&
                    error &&
                    "body" in error &&
                    typeof error.body === "object" &&
                    error.body &&
                    "code" in error.body &&
                    error.body.code === "USER_ALREADY_EXISTS"
                ) {
                    return "skipped";
                }

                throw error;
            }
        }),
    );
}
