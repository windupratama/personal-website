/**
 * application custom error page
 **/

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
        <div className="flex h-screen w-full flex-col items-center justify-center">
            <h1 className="text-red-500">Something went wrong</h1>
            <button onClick={() => reset()}>Refresh page</button>
        </div>
    );
}
