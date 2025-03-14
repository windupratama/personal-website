/**
 * application navbar related components and configurations
 **/

import { NavbarProvider } from "@/providers/navbar-provider";

import { NavbarContent } from "./navbar-content";

function Navbar() {
    return (
        <NavbarProvider>
            <NavbarContent />
        </NavbarProvider>
    );
}

export { Navbar };
