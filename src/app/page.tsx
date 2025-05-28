/**
 * Application home page
 */

import { env } from "@/utils/env";

export default function Home() {
    return (
        <main className="flex h-[100svh] w-full flex-col items-center justify-center">
            <h5 className="text-primary">{env.NEXT_PUBLIC_APP_NAME}</h5>
        </main>
    );
}
