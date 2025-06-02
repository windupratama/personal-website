/**
 * Application navbar related components and configurations
 */

"use client";

import { NavbarProvider } from "@/providers/navbar-provider";
import { NavbarContent } from "@/components/ui/navbar/navbar-content";
import { useApp } from "@/hooks/useApp";

/**
 * Displays the application navbar
 */
function Navbar() {
    const { lenisRef } = useApp();

    return (
        <NavbarProvider lenisRef={lenisRef}>
            <NavbarContent />
        </NavbarProvider>
    );
}

export { Navbar };
