"use client";

import { useEffect } from "react";
import { env } from "@/configs/env";

interface ErrorProps {
    error: Error;
    retry: () => void;
}

/**
 * Page that displays the error page
 */
export default function ErrorPage({ error, retry }: ErrorProps) {
    useEffect(() => {
        document.title = `Error — ${env.NEXT_PUBLIC_APP_NAME}`;
        console.error(error);
    }, [error]);

    return (
        <main className="flex min-h-svh w-full flex-col items-center justify-center">
            <h5>Something went wrong, please try again later</h5>
            <button onClick={() => retry()} className="cursor-pointer">
                Refresh
            </button>
        </main>
    );
}
