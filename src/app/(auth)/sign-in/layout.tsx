/**
 * Application sign-in layout that wraps the sign-in page with a dialog
 */

import { Dialog } from "@/components/ui/dialog";

interface SignInLayoutProps {
    children?: React.ReactNode;
}

export default function SignInLayout({ children }: SignInLayoutProps) {
    return <Dialog>{children}</Dialog>;
}
