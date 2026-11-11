import { Metadata } from "next";
import { env } from "@/configs/env";

export const metadata: Metadata = {
    title: `Page not found — ${env.NEXT_PUBLIC_APP_NAME}`,
};

/**
 * Page that displays the not found page
 */
export default function NotFound() {
    return (
        <main className="flex min-h-svh w-full flex-col items-center justify-center">
            <h5>Page Not Found</h5>
        </main>
    );
}
