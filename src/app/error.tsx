"use client";

import { useEffect } from "react";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center">
            <h1 className="text-destructive">Something went wrong</h1>
            <button onClick={() => reset()}>Refresh</button>
        </div>
    );
}
