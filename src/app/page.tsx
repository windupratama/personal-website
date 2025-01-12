import { env } from "@/utils/env";

export default function Home() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center">
            <h1 className="text-primary">{env.NEXT_PUBLIC_APP_NAME}</h1>
        </div>
    );
}
