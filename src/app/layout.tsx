import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { env } from "@/utils/env";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

interface RootLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: env.NEXT_PUBLIC_APP_NAME,
    description: env.NEXT_PUBLIC_APP_DESCRIPTION
};

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
});

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
