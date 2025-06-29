/**
 * Application sign-up layout that wraps the sign-up page with a dialog
 */

"use client";

import { useBlockAuthenticated } from "@/hooks/useBlockAuthenticated";

interface SignUpLayoutProps {
    children?: React.ReactNode;
}

export default function SignUpLayout({ children }: SignUpLayoutProps) {
    const { session } = useBlockAuthenticated();

    if (session) {
        return null;
    }

    return children;
}
