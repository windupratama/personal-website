/**
 * A utility to merge multiple tailwindcss classes into one
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to merge multiple tailwindcss classes
 */
export function cn(...classNames: ClassValue[]) {
    return twMerge(clsx(classNames));
}
