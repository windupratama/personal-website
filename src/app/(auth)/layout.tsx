/**
 * Application related authentication UI layout
 */

"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Dialog } from "@/components/ui/dialog";

interface AuthLayoutProps {
    children?: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    // Fallback if a user who already has a session tries to access the authentication related pages
    useEffect(() => {
        if (session) {
            router.replace("/");
        }
    }, [session, router]);

    if (session || isPending) {
        return null;
    }

    return (
        <div className="flex h-[100svh] w-full justify-between">
            <div className="bg-primary hidden h-full w-full items-center justify-center lg:flex">
                <div className="flex flex-col gap-4">
                    <h3 className="text-primary w-fit bg-white px-3 py-1 text-3xl text-nowrap lg:text-5xl">
                        AUTHORIZED ⛨
                    </h3>
                    <h3 className="text-primary w-fit bg-white px-3 py-1 text-3xl text-nowrap lg:text-5xl">
                        (▀̿Ĺ̯▀̿ ̿) PERSON
                    </h3>
                    <h3 className="text-primary w-fit bg-white px-3 py-1 text-3xl text-nowrap lg:text-5xl">
                        ONLY 🗝
                    </h3>
                </div>
            </div>
            <div className="flex h-full w-full items-center justify-center">
                <Dialog>{children}</Dialog>
            </div>
        </div>
    );
}
