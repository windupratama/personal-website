/**
 * Pixel trail view related components and configurations
 */

"use client";

import React, {
    Children,
    cloneElement,
    isValidElement,
    ReactElement,
} from "react";
import { cn } from "@/utils/cn";
import { PixelTrailViewProvider } from "@/providers/pixel-trail-view-provider";
import { usePixelTrailView } from "@/hooks/usePixelTrailView";

interface PixelTrailViewProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    color?: string;
}

interface PixelTrailViewLayerProps {
    children?: React.ReactNode;
}

type PixelTrailViewTriggerProps = React.HTMLAttributes<HTMLDivElement>;
type PixelTrailViewUIHandlerProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * A wrapper that provides pixel trail view context to all of it's children
 */
function PixelTrailView({
    children,
    className,
    color,
    ...props
}: PixelTrailViewProps) {
    return (
        <PixelTrailViewProvider color={color}>
            <div
                className={cn("relative h-[100svh] w-full", className)}
                {...props}
            >
                {/* Trigger will be displayed at the very top layer of the view */}
                <PixelTrailViewTrigger />
                {/* UI handler will be displayed at the very bottom layer of the view */}
                <PixelTrailViewUIHandler />
                {/* Children will be displayed in the middle layer of the view */}
                {children}
            </div>
        </PixelTrailViewProvider>
    );
}

/**
 * A layer to show the children on top of the pixel trail view effect
 */
function PixelTrailViewFrontLayer({ children }: PixelTrailViewLayerProps) {
    const modifiedChildren = Children.map(children, (child) => {
        if (isValidElement(child)) {
            const element = child as ReactElement<{ className?: string }>;

            return cloneElement(element, {
                className: cn("z-50", element.props.className),
            });
        }
        return child;
    });

    return <>{modifiedChildren}</>;
}

/**
 * A layer to show the children in the back of the pixel trail view effect
 */
function PixelTrailViewBackLayer({ children }: PixelTrailViewLayerProps) {
    const modifiedChildren = Children.map(children, (child) => {
        if (isValidElement(child)) {
            const element = child as ReactElement<{ className?: string }>;

            return cloneElement(element, {
                className: cn("z-[-70]", element.props.className),
            });
        }
        return child;
    });

    return <>{modifiedChildren}</>;
}

/**
 * A trigger that detects mouse hover on grid cells and updates the active cells
 */
function PixelTrailViewTrigger({
    className,
    ...props
}: PixelTrailViewTriggerProps) {
    const { columns, rows, handleMouseOver } = usePixelTrailView();

    // Create grid cells based on the columns and rows
    const gridCells = Array.from({ length: columns * rows });

    return (
        <div
            className={cn(
                "absolute top-0 left-0 z-70 grid h-[100svh] w-full overflow-hidden",
                className,
            )}
            style={{
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
            }}
            {...props}
        >
            {gridCells.map((_, gridCellIndex) => (
                <div
                    key={gridCellIndex}
                    className="aspect-square"
                    onMouseOver={() => handleMouseOver(gridCellIndex)}
                />
            ))}
        </div>
    );
}

/**
 * Displays the pixel trail view UI based on the active grid cells tracked by the trigger
 */
function PixelTrailViewUIHandler({
    className,
    ...props
}: PixelTrailViewUIHandlerProps) {
    const { columns, rows, activeCells, color } = usePixelTrailView();

    // Create grid cells based on the columns and rows
    const gridCells = Array.from({ length: columns * rows });

    // Set the grid cells color based on the custom preference, use the prefered color if stated, otherwise use default (primary)
    const selectedColor = color === undefined ? "var(--primary)" : color;

    return (
        <div
            className={cn(
                "absolute top-0 left-0 z-[-50] grid h-[100svh] w-full overflow-hidden",
                className,
            )}
            style={{
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
            }}
            {...props}
        >
            {gridCells.map((_, gridCellIndex) => (
                <div
                    key={gridCellIndex}
                    className={`aspect-square`}
                    style={{
                        backgroundColor: activeCells.includes(gridCellIndex)
                            ? selectedColor
                            : "transparent",
                    }}
                />
            ))}
        </div>
    );
}

export { PixelTrailView, PixelTrailViewFrontLayer, PixelTrailViewBackLayer };
