/**
 * a custom hook that is used to get the grid trail view context value
 **/

import { use } from "react";
import { GridTrailViewContext } from "@/providers/grid-trail-view-provider";

function useGridTrailView() {
    const gridTrailViewContext = use(GridTrailViewContext);

    if (!gridTrailViewContext) {
        throw new Error(
            "useGridTrailView must be used within a NavbarProvider"
        );
    }

    return gridTrailViewContext;
}

export { useGridTrailView };
