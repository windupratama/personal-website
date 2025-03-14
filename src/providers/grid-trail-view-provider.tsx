/**
 * a context provider that is used to provide the grid trail view context value
 **/

"use client";

import { createContext, useEffect, useState } from "react";

interface GridTrailViewContext {
    columns: number;
    rows: number;
    activeCells: number[];
    handleMouseOver: (activeCellIndex: number) => void;
}

interface GridTrailViewProviderProps {
    children: React.ReactNode;
}

const GridTrailViewContext = createContext<GridTrailViewContext | null>(null);

function GridTrailViewProvider({ children }: GridTrailViewProviderProps) {
    const [columns, setColumns] = useState(10);
    const [activeCells, setActiveCells] = useState<number[]>([]);

    const rows = 10;

    useEffect(() => {
        const updateGrid = () => {
            if (window.innerWidth < 900) {
                setColumns(10);
            } else {
                setColumns(20);
            }
        };

        updateGrid();
        window.addEventListener("resize", updateGrid);
        return () => window.removeEventListener("resize", updateGrid);
    }, []);

    const handleMouseOver = (activeCellIndex: number) => {
        setActiveCells((prev) => [...prev, activeCellIndex]);

        setTimeout(() => {
            setActiveCells((prev) => prev.filter((i) => i !== activeCellIndex));
        }, 500);
    };

    return (
        <GridTrailViewContext.Provider
            value={{
                columns,
                rows,
                activeCells,
                handleMouseOver
            }}
        >
            {children}
        </GridTrailViewContext.Provider>
    );
}

export { GridTrailViewContext, GridTrailViewProvider };
