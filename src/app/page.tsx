import { Metadata } from "next";
import { env } from "@/configs/env";

export const metadata: Metadata = {
    title: env.NEXT_PUBLIC_APP_NAME,
};

/**
 * Page that displays the home page
 */
export default function Home() {
    return (
        <main className="flex min-h-svh w-full flex-col items-center justify-center">
            <h5>{env.NEXT_PUBLIC_APP_NAME}</h5>
        </main>
    );
}
