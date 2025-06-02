/**
 * A context provider that is used to provide the navbar context value to all of it's children
 */

"use client";

import { createContext, useEffect, useState } from "react";
import { LenisRef } from "lenis/react";

interface NavbarContext {
    isOpen: boolean;
    toggleNavbar: () => void;
}

interface NavbarProviderProps {
    children?: React.ReactNode;
    lenisRef?: React.RefObject<LenisRef | null>;
}

const NavbarContext = createContext<NavbarContext | null>(null);

/**
 * Provides the navbar context value to all of it's children
 */
function NavbarProvider({ children, lenisRef }: NavbarProviderProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (lenisRef && lenisRef.current) {
            const lenis = lenisRef.current.lenis;

            // Disable scroll when the navbar is open
            if (isOpen) {
                lenis?.stop();
            } else {
                lenis?.start();
            }
        }
    }, [lenisRef, isOpen]);

    const toggleNavbar = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <NavbarContext.Provider value={{ isOpen, toggleNavbar }}>
            {children}
        </NavbarContext.Provider>
    );
}

export { NavbarContext, NavbarProvider };
