/**
 * a component that contains all the navbar content
 **/

import { NavbarHeader } from "@/components/ui/navbar/navbar-header";
import { NavbarMenu } from "@/components/ui/navbar/navbar-menu";

function NavbarContent() {
    return (
        <>
            {/* navbar ui */}
            <NavbarHeader />
            {/* navbar links menu */}
            <NavbarMenu />
        </>
    );
}

export { NavbarContent };
