/**
 * a custom hook that is used to get the bouncing element context value
 **/

import { use } from "react";
import { BouncingElementContext } from "@/providers/bouncing-element-provider";

function useBouncingElement() {
    const context = use(BouncingElementContext);
    if (!context) {
        throw new Error(
            "useBouncingElement must be used within a BouncingElementProvider"
        );
    }
    return context;
}

export { useBouncingElement };
