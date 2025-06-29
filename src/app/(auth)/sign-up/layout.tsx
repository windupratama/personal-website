/**
 * Application sign-up layout that wraps the sign-up page with a dialog
 */

import { Dialog } from "@/components/ui/dialog";

interface SignUpLayoutProps {
    children?: React.ReactNode;
}

export default function SignUpLayout({ children }: SignUpLayoutProps) {
    return <Dialog>{children}</Dialog>;
}
