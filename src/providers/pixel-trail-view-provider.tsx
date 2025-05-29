/**
 * A context provider that is used to provide the pixel trail view context value to all of it's children
 */

"use client";

import { createContext, useEffect, useState } from "react";

interface PixelTrailViewContext {
    columns: number;
    rows: number;
    activeCells: number[];
    color?: string;
    handleMouseOver: (activeCellIndex: number) => void;
}

interface PixelTrailViewProviderProps {
    children?: React.ReactNode;
    color?: string;
}

const PixelTrailViewContext = createContext<PixelTrailViewContext | null>(null);

/**
 * Provides the pixel trail view context value to all of it's children
 */
function PixelTrailViewProvider({
    children,
    color,
}: PixelTrailViewProviderProps) {
    const [columns, setColumns] = useState(10);
    const [activeCells, setActiveCells] = useState<number[]>([]);

    const rows = 10;

    useEffect(() => {
        // Update grid columns based on screen width
        const updateGridColumns = () => {
            const screenWidth = window.innerWidth;
            const cellsTargetWidth = 75;

            // Calculate the number of columns based on screen width divided by cells targeted width
            // The result will be a number of columns that can fit in the screen width that each cells is a close to 75px
            const newColumns = Math.floor(screenWidth / cellsTargetWidth);

            // Set columns state using the earlier calculated value or minimum value as 1
            setColumns(Math.max(newColumns, 1));
        };

        updateGridColumns();

        window.addEventListener("resize", updateGridColumns);
        return () => window.removeEventListener("resize", updateGridColumns);
    }, []);

    const handleMouseOver = (activeCellIndex: number) => {
        setActiveCells((prev) => [...prev, activeCellIndex]);

        setTimeout(() => {
            setActiveCells((prev) => prev.filter((i) => i !== activeCellIndex));
        }, 1000);
    };

    return (
        <PixelTrailViewContext.Provider
            value={{
                columns,
                rows,
                activeCells,
                color,
                handleMouseOver,
            }}
        >
            {children}
        </PixelTrailViewContext.Provider>
    );
}

export { PixelTrailViewContext, PixelTrailViewProvider };
