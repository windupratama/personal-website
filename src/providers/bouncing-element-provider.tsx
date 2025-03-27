/**
 * a context provider that is used to provide the bouncing element context value
 **/

"use client";

import { createContext, useRef } from "react";

interface BouncingElementContext {
    containerRef: React.RefObject<HTMLDivElement | null>;
}

const BouncingElementContext = createContext<BouncingElementContext | null>(
    null
);

function BouncingElementProvider({ children }: { children?: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    return (
        <BouncingElementContext value={{ containerRef }}>
            {children}
        </BouncingElementContext>
    );
}

export { BouncingElementContext, BouncingElementProvider };
