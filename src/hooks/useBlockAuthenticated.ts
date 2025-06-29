/**
 * A custom hook that is used to block authenticated users from accessing certain routes
 *
 * Fallback: will redirect specified path (default: home page)
 */

import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

/**
 * A hook that is used to block authenticated users from accessing certain routes
 */
export function useBlockAuthenticated(redirectPath = "/") {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    useEffect(() => {
        if (!isPending && session) {
            router.replace(redirectPath);
        }
    }, [session, router, isPending, redirectPath]);

    return { session };
}
