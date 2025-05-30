/**
 * A component that provide an underline effect on it's children when hovered
 */

import { cn } from "@/utils/cn";

export interface UnderlineHoverProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    ref?: React.RefObject<HTMLDivElement | null>;
}

/**
 * Provides an underline effect on it's children when hovered
 */
function UnderlineHover({
    children,
    className,
    ...props
}: UnderlineHoverProps) {
    return (
        <div
            className={cn(
                "relative h-fit w-fit cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-current before:transition-all before:duration-300 hover:before:w-full",
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export { UnderlineHover };
