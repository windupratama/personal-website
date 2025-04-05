/**
 * A utility to merge multiple tailwindcss classes into one to avoid duplicates and conflicts
 **/

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to merge multiple tailwindcss classes into one
 **/
export function cn(...classNames: ClassValue[]) {
    return twMerge(clsx(classNames));
}
