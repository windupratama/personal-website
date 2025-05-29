/**
 * Application home page
 */

import { HeroSection } from "@/components/layout/home/hero-section";

export default function Home() {
    return (
        <main className="flex min-h-[100svh] w-full flex-col items-center justify-center">
            <HeroSection />
        </main>
    );
}
