/**
 * a utils function to merge multiple tailwindcss classes
 **/

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classNames: ClassValue[]) {
    return twMerge(clsx(classNames));
}
