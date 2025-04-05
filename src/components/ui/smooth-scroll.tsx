/**
 * A component that provide a smooth scroll effect
 **/

import { LenisProps, LenisRef, ReactLenis } from "lenis/react";

interface SmoothScrollProps extends LenisProps {
    children?: React.ReactNode;
    ref?: React.RefObject<LenisRef | null>;
}

/**
 * Provides a smooth scroll effect when scrolling the contained children contents
 **/
function SmoothScroll({ children, ref, ...props }: SmoothScrollProps) {
    return (
        <ReactLenis ref={ref} root {...props}>
            {children}
        </ReactLenis>
    );
}

export { SmoothScroll };
