// Application configuration

import { Geist } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/globals.css";
import { App } from "@/components/layout/app/app";
import { env } from "@/configs/env";

interface RootLayoutProps {
    children?: React.ReactNode;
}

// Font configurations
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

// Metadata configuration
export const metadata: Metadata = {
    title: env.NEXT_PUBLIC_APP_NAME,
    description: env.NEXT_PUBLIC_APP_DESCRIPTION,
    authors: [
        {
            name: env.NEXT_PUBLIC_APP_AUTHOR,
            url: env.NEXT_PUBLIC_APP_URL,
        },
    ],
};

/**
 * Layout that handles the application
 */
export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className={`${geistSans.variable} antialiased`}>
            <body>
                <App>{children}</App>
            </body>
        </html>
    );
}
