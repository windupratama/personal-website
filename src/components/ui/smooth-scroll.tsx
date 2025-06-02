/**
 * A component that provide a smooth scroll effect to it's children
 */

"use client";

import { LenisProps, ReactLenis } from "lenis/react";
import { useApp } from "@/hooks/useApp";

interface SmoothScrollProps extends LenisProps {
    children?: React.ReactNode;
}

/**
 * Provides a smooth scroll effect to it's children
 */
function SmoothScroll({ children, ...props }: SmoothScrollProps) {
    const { lenisRef } = useApp();

    return (
        <ReactLenis ref={lenisRef} root {...props}>
            {children}
        </ReactLenis>
    );
}

export { SmoothScroll };
