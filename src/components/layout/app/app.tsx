"use client";

import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { AppProvider } from "@/providers/app-provider";

interface AppProps {
    children?: React.ReactNode;
}

/**
 * Layout that handles the application top-level
 */
function App({ children }: AppProps) {
    return (
        <AppProvider>
            <div className="flex flex-col overflow-hidden">
                <SmoothScroll>{children}</SmoothScroll>
            </div>
        </AppProvider>
    );
}

export { App };
