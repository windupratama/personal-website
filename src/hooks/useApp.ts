/**
 * A custom hook that is used to get the application context value
 */

import { use } from "react";
import { AppContext } from "@/providers/app-provider";

/**
 * A hook that is used to get the application context value
 */
function useApp() {
    const appContext = use(AppContext);

    if (!appContext) {
        throw new Error("useApp must be used within a AppProvider");
    }

    return appContext;
}

export { useApp };
