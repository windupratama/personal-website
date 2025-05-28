/**
 * Application custom error page
 */

"use client";

import { useEffect } from "react";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="flex h-[100svh] w-full flex-col items-center justify-center">
            <h5 className="text-destructive">Something went wrong</h5>
            <button className="cursor-pointer" onClick={() => reset()}>
                Refresh
            </button>
        </main>
    );
}
