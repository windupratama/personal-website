/**
 * Button component related components and configurations
 */

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    children?: React.ReactNode;
    logo?: React.ReactNode;
    logoPosition?: logoPosition;
    ref?: React.Ref<HTMLButtonElement>;
}

type logoPosition = "start" | "default" | "end";

/**
 * Button component style variant configuration
 */
const buttonVariants = cva(
    "flex items-center justify-center gap-2 rounded-md text-white hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
    {
        variants: {
            variant: {
                default: "bg-primary hover:bg-primary/90",
                outline:
                    "bg-background hover:bg-gray-200/90 border border-gray-500 text-black",
                ghost: "bg-transparent text-primary",
                destructive:
                    "bg-destructive hover:bg-destructive/90 text-white",
            },
            size: {
                full: "h-fit w-full px-4 py-2 ",
                fit: "h-fit w-fit",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "full",
        },
    },
);

/**
 * Provides a custom styled button component
 */
function Button({
    children,
    variant,
    size,
    className,
    logo,
    logoPosition = "default",
    type = "button",
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(buttonVariants({ variant, size }), className)}
            type={type}
            {...props}
        >
            {logo && (logoPosition === "start" || logoPosition === "end") ? (
                // If there is a logo and is placed at the start or in the end
                // render it separately as it need to display logo at certain location

                // If logo is at the start or end
                <>
                    <span className="flex flex-1 items-center">
                        {logoPosition === "start" && logo}
                    </span>

                    <span className="flex flex-1 items-center justify-center gap-2">
                        {children}
                    </span>

                    <span className="flex flex-1 items-center justify-end">
                        {logoPosition === "end" && logo}
                    </span>
                </>
            ) : (
                // Default case
                <span className="flex items-center gap-2">
                    {logo && logoPosition === "default" && (
                        <span className="self-center">{logo}</span>
                    )}
                    {children}
                </span>
            )}
        </button>
    );
}

export { Button };
