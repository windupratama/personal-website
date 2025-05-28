import "@/styles/globals.css";
import type { Metadata } from "next";
import { env } from "@/utils/env";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

interface RootLayoutProps {
    children?: React.ReactNode;
}

const ronzino = localFont({
    src: "../../public/fonts/ronzino/ronzino.woff2",
    variable: "--font-ronzino",
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
            <body className={`${ronzino.variable} antialiased`}>
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
