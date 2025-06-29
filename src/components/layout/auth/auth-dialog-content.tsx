/**
 * A component that contains the auth related dialog contents
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

interface AuthDialogContentProps {
    data?: DialogData;
}

/**
 * Displays the auth related dialog content
 */
function AuthDialogContent({ data }: AuthDialogContentProps) {
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

export { AuthDialogContent };
