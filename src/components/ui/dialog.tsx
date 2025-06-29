/**
 * Dialog component related components and configurations
 */

"use client";

import { DialogProvider } from "@/providers/dialog-provider";
import { useDialog } from "@/hooks/useDialog";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/utils/cn";

interface DialogProps {
    children?: React.ReactNode;
}

interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    ref?: React.Ref<HTMLDivElement>;
}

interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    ref?: React.Ref<HTMLDivElement>;
}

interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children?: React.ReactNode;
    ref?: React.Ref<HTMLHeadingElement>;
}

interface DialogDescriptionProps
    extends React.HTMLAttributes<HTMLHeadingElement> {
    children?: React.ReactNode;
    ref?: React.Ref<HTMLHeadingElement>;
}

interface DialogItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    ref?: React.Ref<HTMLDivElement>;
}

interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    ref?: React.Ref<HTMLDivElement>;
}

type DialogTriggerProps = ButtonProps;
type DialogActionProps = ButtonProps;

/**
 * A wrapper that provides dialog context to all of its children
 */
function Dialog({ children }: DialogProps) {
    return <DialogProvider>{children}</DialogProvider>;
}

/**
 * A structure that displays the dialog content
 */
function DialogContent({ children, className, ...props }: DialogContentProps) {
    const { isOpen } = useDialog();

    // Prevent dialog to be closed by pressing keys when it is open
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (isOpen) {
                event.preventDefault();
                event.stopPropagation();
            }
        }

        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown, {
                capture: true,
            });
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown, {
                capture: true,
            });
        };
    }, [isOpen]);

    return (
        <div
            className={cn(
                "fixed inset-0 z-[1000] flex items-center justify-center gap-2 bg-black/30 backdrop-blur-2xl",
                className,
            )}
            style={{
                display: isOpen ? "flex" : "none",
            }}
            {...props}
        >
            <Card>{children}</Card>
        </div>
    );
}

/**
 * A structure that displays the dialog header
 */
function DialogHeader({ children, className, ...props }: DialogHeaderProps) {
    return (
        <div
            className={cn("flex flex-col items-center gap-1.5", className)}
            {...props}
        >
            {children}
        </div>
    );
}

/**
 * A structure that displays the dialog title
 */
function DialogTitle({ children, className, ...props }: DialogTitleProps) {
    return (
        <h5
            className={cn("text-center text-xl font-bold", className)}
            {...props}
        >
            {children}
        </h5>
    );
}

/**
 * A structure that displays the dialog subtitle
 */
function DialogDescription({
    children,
    className,
    ...props
}: DialogDescriptionProps) {
    return (
        <h6 className={cn("text-center text-sm", className)} {...props}>
            {children}
        </h6>
    );
}

/**
 * A structure that displays the dialog item
 */
function DialogItem({ children, className, ...props }: DialogItemProps) {
    return (
        <div className={cn("flex flex-col gap-1.5", className)} {...props}>
            {children}
        </div>
    );
}

/**
 * A trigger that toggles the dialog visibility
 */
function DialogTrigger({ children, ...props }: DialogTriggerProps) {
    const { toggleDialog } = useDialog();

    return (
        <Button onClick={toggleDialog} {...props}>
            {children}
        </Button>
    );
}

/**
 * A trigger that runs the actions
 *
 * Fallback: if no onClick is provided, it will toggle the dialog
 */
function DialogAction({ children, onClick, ...props }: DialogActionProps) {
    const { toggleDialog } = useDialog();

    return (
        <Button onClick={onClick ? onClick : toggleDialog} {...props}>
            {children}
        </Button>
    );
}

/**
 * A structure that displays the dialog footer
 */
function DialogFooter({ children, className, ...props }: DialogFooterProps) {
    return (
        <div className={cn("flex flex-col gap-1.5", className)} {...props}>
            {children}
        </div>
    );
}

export {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogItem,
    DialogTrigger,
    DialogAction,
    DialogFooter,
};
