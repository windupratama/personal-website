/**
 * A component that provide a smooth scroll effect to it's children
 */

import { LenisProps, LenisRef, ReactLenis } from "lenis/react";

interface SmoothScrollProps extends LenisProps {
    children?: React.ReactNode;
    ref?: React.RefObject<LenisRef | null>;
}

/**
 * Provides a smooth scroll effect to it's children
 */
function SmoothScroll({ children, ref, ...props }: SmoothScrollProps) {
    return (
        <ReactLenis ref={ref} root {...props}>
            {children}
        </ReactLenis>
    );
}

export { SmoothScroll };
