/**
 * Card related components and configurations
 */

import { cn } from "@/utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    ref?: React.Ref<HTMLDivElement>;
}

/**
 * A Wrapper that displays card
 */
function Card({ children, className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "bg-background flex h-fit w-96 flex-col gap-4 rounded-lg p-6",
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}

/**
 * A structure that displays card header
 */
function CardHeader({ children, className, ...props }: CardProps) {
    return (
        <div className={cn("flex flex-col gap-1.5", className)} {...props}>
            {children}
        </div>
    );
}

/**
 * A structure that displays card title
 */
function CardTitle({ children, className, ...props }: CardProps) {
    return (
        <h5 className={cn("text-xl font-bold", className)} {...props}>
            {children}
        </h5>
    );
}

/**
 * A structure that displays card subtitle
 */
function CardDescription({ children, className, ...props }: CardProps) {
    return (
        <h6 className={cn("text-sm text-gray-500", className)} {...props}>
            {children}
        </h6>
    );
}

/**
 * A structure that displays card content
 */
function CardContent({ children, className, ...props }: CardProps) {
    return (
        <div className={cn("flex flex-col gap-2", className)} {...props}>
            {children}
        </div>
    );
}

/**
 * A structure that displays card item
 */
function CardItem({ children, className, ...props }: CardProps) {
    return (
        <div className={cn("flex flex-col gap-1.5", className)} {...props}>
            {children}
        </div>
    );
}

/**
 * A structure that displays card footer
 */
function CardFooter({ children, className, ...props }: CardProps) {
    return (
        <div className={cn("flex flex-col gap-1.5", className)} {...props}>
            {children}
        </div>
    );
}

export {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardItem,
    CardFooter,
};
