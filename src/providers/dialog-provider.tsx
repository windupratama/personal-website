/**
 * A context provider that is used to provide the dialog context value to all of it's children
 */

"use client";

import { createContext, useState } from "react";

interface DialogContext {
    isOpen: boolean;
    data?: DialogData;
    toggleDialog: () => void;
    toggleDialogWithData?: (data: DialogData) => void;
}

interface DialogProviderProps {
    children?: React.ReactNode;
}

export interface DialogData {
    title: string;
    description?: string;
    status?: DialogStatus;
    actions?: () => void;
}

type DialogStatus = "SUCCESS" | "ERROR" | "WARNING" | "INFO";

const DialogContext = createContext<DialogContext | null>(null);

/**
 * Provides the dialog context value to all of it's children
 */
function DialogProvider({ children }: DialogProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState<DialogData | undefined>(undefined);

    function toggleDialog() {
        setIsOpen((prev) => !prev);
    }

    function toggleDialogWithData(data: DialogData) {
        setData(data);
        toggleDialog();
    }

    return (
        <DialogContext
            value={{
                isOpen,
                data,
                toggleDialog,
                toggleDialogWithData,
            }}
        >
            {children}
        </DialogContext>
    );
}

export { DialogContext, DialogProvider };
