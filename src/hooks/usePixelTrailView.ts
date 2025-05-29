/**
 * A custom hook that is used to get the pixel trail view context value
 */

import { use } from "react";
import { PixelTrailViewContext } from "@/providers/pixel-trail-view-provider";

/**
 * A hook that is used to get the pixel trail view context value
 */
function usePixelTrailView() {
    const pixelTrailViewContext = use(PixelTrailViewContext);

    if (!pixelTrailViewContext) {
        throw new Error(
            "usePixelTrailView must be used within a PixelTrailViewProvider",
        );
    }

    return pixelTrailViewContext;
}

export { usePixelTrailView };
