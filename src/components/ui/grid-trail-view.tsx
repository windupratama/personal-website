/**
 * grid trail view related components and configurations
 **/

"use client";

import { cn } from "@/utils/cn";
import { useGridTrailView } from "@/hooks/useGridTrailView";
import { GridTrailViewProvider } from "@/providers/grid-trail-view-provider";
import React, {
    Children,
    cloneElement,
    isValidElement,
    ReactElement
} from "react";

interface GridTrailViewProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

interface GridTrailViewLayerProps {
    children?: React.ReactNode;
}

type GridTrailViewTriggerProps = React.HTMLAttributes<HTMLDivElement>;
type GridTrailViewUIHandlerProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * GridTrailView contains a wrapper that provides grid trail view to its children
 */
function GridTrailView({ children, className, ...props }: GridTrailViewProps) {
    return (
        <GridTrailViewProvider>
            <div
                className={cn("relative h-[100svh] w-full", className)}
                {...props}
            >
                {/* trigger will be displayed at the very top */}
                <GridTrailViewTrigger />
                {/* UI handler will be displayed at the very bottom */}
                <GridTrailViewUIHandler />
                {/* children will be displayed in the middle */}
                {children}
            </div>
        </GridTrailViewProvider>
    );
}

/**
 * GridTrailViewFrontLayer is a layer for the children to show up in the front of the grid trail view effect
 **/
function GridTrailViewFrontLayer({ children }: GridTrailViewLayerProps) {
    const modifiedChildren = Children.map(children, (child) => {
        if (isValidElement(child)) {
            const element = child as ReactElement<{ className?: string }>;

            return cloneElement(element, {
                className: cn("z-50", element.props.className)
            });
        }
        return child;
    });

    return <>{modifiedChildren}</>;
}

/**
 * GridTrailViewBackLayer is a layer for the children to show up in the back of the grid trail view effect
 **/
function GridTrailViewBackLayer({ children }: GridTrailViewLayerProps) {
    const modifiedChildren = Children.map(children, (child) => {
        if (isValidElement(child)) {
            const element = child as ReactElement<{ className?: string }>;

            return cloneElement(element, {
                className: cn("z-[-70]", element.props.className)
            });
        }
        return child;
    });

    return <>{modifiedChildren}</>;
}

/**
 * GridTrailTrigger act as a trigger that detects mouse hover on grid cells
 **/
function GridTrailViewTrigger({
    className,
    ...props
}: GridTrailViewTriggerProps) {
    const { columns, rows, handleMouseOver } = useGridTrailView();

    // create grid cells based on the columns and rows
    const gridCells = Array.from({ length: columns * rows });

    return (
        <div
            className={cn(
                "absolute top-0 left-0 z-70 grid h-[100svh] w-full overflow-hidden",
                className
            )}
            style={{
                gridTemplateColumns: `repeat(${columns}, 1fr)`
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
 * GridTrailViewUIHandler displays the grid trail view UI based on the active cells
 **/
function GridTrailViewUIHandler({
    className,
    ...props
}: GridTrailViewUIHandlerProps) {
    const { columns, rows, activeCells } = useGridTrailView();

    // create grid cells based on the columns and rows
    const gridCells = Array.from({ length: columns * rows });

    return (
        <div
            className={cn(
                "absolute top-0 left-0 z-[-50] grid h-[100svh] w-full overflow-hidden",
                className
            )}
            style={{
                gridTemplateColumns: `repeat(${columns}, 1fr)`
            }}
            {...props}
        >
            {gridCells.map((_, gridCellIndex) => (
                <div
                    key={gridCellIndex}
                    className={`aspect-square`}
                    style={{
                        backgroundColor: activeCells.includes(gridCellIndex)
                            ? "var(--primary)"
                            : "transparent"
                    }}
                />
            ))}
        </div>
    );
}

export { GridTrailView, GridTrailViewFrontLayer, GridTrailViewBackLayer };
