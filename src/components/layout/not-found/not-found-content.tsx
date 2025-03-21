/**
 * a component that contains the application not found contents
 **/

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BouncingElementBackLayer } from "@/components/ui/bouncing-element";

function NotFoundContent() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center gap-1">
                <BouncingElementBackLayer>
                    <h3 className="font-junicode text-primary text-5xl lg:text-7xl">
                        Page not found.
                    </h3>
                </BouncingElementBackLayer>
                <h5 className="max-w-[80%] text-center text-white mix-blend-difference lg:max-w-full">
                    You seems lost! There is nothing you can find here pal!
                </h5>
            </div>
            <Link href="/">
                <Button>Go back to home</Button>
            </Link>
        </div>
    );
}

export { NotFoundContent };
