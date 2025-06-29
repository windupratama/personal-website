/**
 * Application sign-in layout that wraps the sign-in page with a dialog
 */

"use client";

import { useBlockAuthenticated } from "@/hooks/useBlockAuthenticated";

interface SignInLayoutProps {
    children?: React.ReactNode;
}

export default function SignInLayout({ children }: SignInLayoutProps) {
    const { session } = useBlockAuthenticated();

    if (session) {
        return null;
    }

    return children;
}
