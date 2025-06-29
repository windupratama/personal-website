/**
 * A component that contains the sign-in dialog contents
 */

import { DialogData } from "@/providers/dialog-provider";
import {
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogAction,
    DialogTrigger,
    DialogItem,
} from "@/components/ui/dialog";

interface SignInDialogContentProps {
    data?: DialogData;
}

/**
 * Displays the sign-in dialog content
 */
function SignInDialogContent({ data }: SignInDialogContentProps) {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{data?.title}</DialogTitle>
                <DialogDescription>{data?.description}</DialogDescription>
            </DialogHeader>
            <DialogItem>
                {data?.status === "SUCCESS" && data?.actions ? (
                    <DialogAction onClick={data.actions}>Continue</DialogAction>
                ) : (
                    <DialogTrigger>Close</DialogTrigger>
                )}
            </DialogItem>
        </DialogContent>
    );
}

export { SignInDialogContent };
