/**
 * Application custom not found page
 */

import { Metadata } from "next";
import { env } from "@/utils/env";
import { NotFoundContent } from "@/components/layout/not-found/not-found-content";

export const metadata: Metadata = {
    title: `Page Not Found ── ${env.NEXT_PUBLIC_APP_NAME}`,
};

export default function NotFound() {
    return <NotFoundContent />;
}
