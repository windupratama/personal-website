import "@/styles/globals.css";
import type { Metadata } from "next";
import { env } from "@/utils/env";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { Navbar } from "@/components/ui/navbar/navbar";

interface RootLayoutProps {
    children?: React.ReactNode;
}

const ronzino = localFont({
    src: "../../public/fonts/ronzino/ronzino.woff2",
    variable: "--font-ronzino",
});

const junicode = localFont({
    src: "../../public/fonts/junicode/junicode.woff2",
    variable: "--font-junicode",
});

const junicodeItalic = localFont({
    src: "../../public/fonts/junicode/junicode-italic.woff2",
    variable: "--font-junicode-italic",
});

const redaction35 = localFont({
    src: "../../public/fonts/redaction/redaction-35.woff2",
    variable: "--font-redaction-35",
});

const redaction35Italic = localFont({
    src: "../../public/fonts/redaction/redaction-35-italic.woff2",
    variable: "--font-redaction-35-italic",
});

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

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${ronzino.variable} ${junicode.variable} ${junicodeItalic.variable} ${redaction35.variable} ${redaction35Italic.variable} antialiased`}
            >
                <div className="flex flex-col overflow-hidden">
                    <Navbar />
                    <SmoothScroll>{children}</SmoothScroll>
                </div>
            </body>
        </html>
    );
}
