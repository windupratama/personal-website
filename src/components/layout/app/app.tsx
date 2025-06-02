/**
 * A component that contains the application layout
 */

"use client";

import { AppProvider } from "@/providers/app-provider";
import { Navbar } from "@/components/ui/navbar/navbar";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

interface AppProps {
    children?: React.ReactNode;
}

/**
 * Displays the application layout
 */
function App({ children }: AppProps) {
    return (
        <AppProvider>
            <div className="flex flex-col overflow-hidden">
                <Navbar />
                <SmoothScroll>{children}</SmoothScroll>
            </div>
        </AppProvider>
    );
}

export { App };
