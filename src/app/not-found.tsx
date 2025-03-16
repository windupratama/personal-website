/**
 * application custom not found page
 **/

import { NotFoundContent } from "@/components/layout/not-found/not-found-content";
import {
    BouncingElement,
    BouncingElementLayer,
    BouncingElementView
} from "@/components/ui/bouncing-element";
import Image from "next/image";

export default function NotFound() {
    return (
        <BouncingElementView>
            {/* bouncing element effect */}
            <BouncingElementLayer>
                <BouncingElement position="start">
                    <div className="h-[32vw] w-[32vw] sm:h-[24vw] sm:w-[24vw] lg:h-[16vw] lg:w-[16vw]">
                        <Image
                            className="rounded-xl bg-black"
                            fill={true}
                            style={{ objectFit: "cover" }}
                            src="/images/wrong-way-sign.jpg"
                            alt="Wrong Way Sign"
                        />
                    </div>
                </BouncingElement>
                <BouncingElement position="end">
                    <div className="h-[32vw] w-[32vw] sm:h-[24vw] sm:w-[24vw] lg:h-[16vw] lg:w-[16vw]">
                        <Image
                            className="rounded-xl bg-black"
                            fill={true}
                            style={{ objectFit: "cover" }}
                            src="/images/crying-man.gif"
                            alt="Crying Man"
                            unoptimized={true}
                        />
                    </div>
                </BouncingElement>
            </BouncingElementLayer>
            {/* not found content message */}
            <NotFoundContent />
        </BouncingElementView>
    );
}
