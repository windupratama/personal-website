/**
 * A custom hook that is used to get the dialog context value
 */

import { use } from "react";
import { DialogContext } from "@/providers/dialog-provider";

/**
 * A hook that is used to get the dialog context value
 */
function useDialog() {
    const dialogContext = use(DialogContext);

    if (!dialogContext) {
        throw new Error("useDialog must be used within a DialogProvider");
    }

    return dialogContext;
}

export { useDialog };
