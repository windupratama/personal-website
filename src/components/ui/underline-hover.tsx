/**
 * a component that provide a underline effect on it's children when hovered (width based on children)
 **/

import { cn } from "@/utils/cn";

export interface UnderlineHoverProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    ref?: React.RefObject<HTMLDivElement | null>;
}

function UnderlineHover({
    children,
    className,
    ...props
}: UnderlineHoverProps) {
    return (
        <div
            className={cn(
                "relative h-fit w-fit cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-current before:transition-all before:duration-300 hover:before:w-full",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export { UnderlineHover };
