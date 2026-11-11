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
 * Provider that provides application context value to all of its children
 */
function AppProvider({ children }: AppProviderProps) {
    const lenisRef = useRef<LenisRef | null>(null);

    return <AppContext value={{ lenisRef }}>{children}</AppContext>;
}

export { AppContext, AppProvider };
