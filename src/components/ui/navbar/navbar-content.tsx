/**
 * A component that contains all the navbar content (header and menu)
 */

import { NavbarHeader } from "@/components/ui/navbar/navbar-header";
import { NavbarMenu } from "@/components/ui/navbar/navbar-menu";

/**
 * A wrapper that contains the navbar contents
 */
function NavbarContent() {
    return (
        <>
            {/* Navbar UI */}
            <NavbarHeader />
            {/* Active navbar menu */}
            <NavbarMenu />
        </>
    );
}

export { NavbarContent };
