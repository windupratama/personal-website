import { ReactLenis } from "lenis/react";

interface SmoothScrollProps {
    children: React.ReactNode;
}

function SmoothScroll({ children }: SmoothScrollProps) {
    return <ReactLenis root>{children}</ReactLenis>;
}

export { SmoothScroll };
