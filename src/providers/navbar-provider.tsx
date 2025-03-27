/**
 * a context provider that is used to provide the navbar context value
 **/

"use client";

import { createContext, useState } from "react";

interface NavbarContext {
    isOpen: boolean;
    toggleNavbar: () => void;
}

interface NavbarProviderProps {
    children?: React.ReactNode;
}

const NavbarContext = createContext<NavbarContext | null>(null);

function NavbarProvider({ children }: NavbarProviderProps) {
    const [isOpen, setIsOpen] = useState(false);

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
