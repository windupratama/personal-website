import { env } from "@/utils/env";

export default function Home() {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <h1>{env.NEXT_PUBLIC_APP_NAME}</h1>
        </div>
    );
}
