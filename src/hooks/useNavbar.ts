/**
 * A custom hook that is used to get the navbar context value
 */

import { use } from "react";
import { NavbarContext } from "@/providers/navbar-provider";

/**
 * A hook that is used to get the navbar context value
 */
function useNavbar() {
    const navbarContext = use(NavbarContext);

    if (!navbarContext) {
        throw new Error("useNavbar must be used within a NavbarProvider");
    }

    return navbarContext;
}

export { useNavbar };
