import { env } from "@/utils/env";

export default function Home() {
    return (
        <div className="text-primary flex h-[100svh] w-full flex-col items-center justify-center">
            <h5>{env.NEXT_PUBLIC_APP_NAME}</h5>
        </div>
    );
}
