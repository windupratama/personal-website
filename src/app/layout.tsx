import "@/styles/globals.css";
import type { Metadata } from "next";
import { env } from "@/utils/env";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

interface RootLayoutProps {
    children?: React.ReactNode;
}

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

// Application fonts configuration
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const junicode = localFont({
    src: "../../public/fonts/junicode/junicode.woff2",
    variable: "--font-junicode",
});

const junicodeItalic = localFont({
    src: "../../public/fonts/junicode/junicode-italic.woff2",
    variable: "--font-junicode-italic",
});

const redaction = localFont({
    src: "../../public/fonts/redaction-50/redaction-50.woff2",
    variable: "--font-redaction",
});

const redactionItalic = localFont({
    src: "../../public/fonts/redaction-50/redaction-50-italic.woff2",
    variable: "--font-redaction-italic",
});

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${junicode.variable} ${junicodeItalic.variable} ${redaction.variable} ${redactionItalic.variable} antialiased`}
            >
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
