/**
 * Authentication related zod schemas
 */

import { z } from "zod";

/**
 * Schema for user sign-up
 */
export const signUpSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters!"),
    email: z.string().email("Invalid email format!"),
    password: z.string().min(8, "Password must be at least 8 characters!"),
});
