/**
 * A component that contains the sign-up dialog contents
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

interface SignUpDialogContentProps {
    data?: DialogData;
}

/**
 * Displays the sign-up dialog content
 */
function SignUpDialogContent({ data }: SignUpDialogContentProps) {
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

export { SignUpDialogContent };
