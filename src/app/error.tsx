/**
 * Application custom error page
 */

"use client";

import { useEffect } from "react";
import { env } from "@/utils/env";
import { ErrorContent } from "@/components/layout/error/error-content";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        document.title = `Error ── ${env.NEXT_PUBLIC_APP_NAME}`;
        console.error(error);
    }, [error]);

    return <ErrorContent reset={reset} />;
}
