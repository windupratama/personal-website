import "@/styles/globals.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import type { Metadata } from "next";
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
    variable: "--font-inter",
    subsets: ["latin"]
});

const junicode = localFont({
    src: "../../public/fonts/junicode/junicode-var.ttf",
    variable: "--font-junicode"
});

const junicodeItalic = localFont({
    src: "../../public/fonts/junicode/junicode-italic-var.ttf",
    variable: "--font-junicode-italic"
});

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} ${junicode.variable} ${junicodeItalic.variable} antialiased`}
            >
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
