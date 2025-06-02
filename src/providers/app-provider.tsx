/**
 * A context provider that is used to provide the application context value to all of it's children
 */

"use client";

import { LenisRef } from "lenis/react";
import { createContext, useRef } from "react";

interface AppContext {
    lenisRef: React.RefObject<LenisRef | null>;
}

interface AppProviderProps {
    children?: React.ReactNode;
}

const AppContext = createContext<AppContext | null>(null);

/**
 * Provides the application context value to all of it's children
 */
function AppProvider({ children }: AppProviderProps) {
    const lenisRef = useRef<LenisRef | null>(null);

    return <AppContext value={{ lenisRef }}>{children}</AppContext>;
}

export { AppContext, AppProvider };
