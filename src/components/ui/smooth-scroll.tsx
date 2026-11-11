"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

interface SmoothScrollProps {
    children: React.ReactNode;
}

/**
 * Component that handles smooth scrolling
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
    return <ReactLenis root>{children}</ReactLenis>;
}
