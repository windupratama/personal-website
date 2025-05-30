/**
 * Application navbar related components and configurations
 */

import { NavbarProvider } from "@/providers/navbar-provider";
import { NavbarContent } from "@/components/ui/navbar/navbar-content";

/**
 * Displays the application navbar
 */
function Navbar() {
    return (
        <NavbarProvider>
            <NavbarContent />
        </NavbarProvider>
    );
}

export { Navbar };
