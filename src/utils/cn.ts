import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ClassValue } from "clsx";

/**
 * Utility that handles merging multiple tailwind css classes
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
