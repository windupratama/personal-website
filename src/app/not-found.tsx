/**
 * application custom not found page
 **/

import { NotFoundContent } from "@/components/layout/not-found/not-found-content";
import {
    BouncingElement,
    BouncingElementLayer,
    BouncingElementView
} from "@/components/ui/bouncing-element";
import { GridTrailView } from "@/components/ui/grid-trail-view";
import { env } from "@/utils/env";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: `Page Not Found ── ${env.NEXT_PUBLIC_APP_NAME}`
};

export default function NotFound() {
    return (
        <GridTrailView>
            <BouncingElementView>
                {/* bouncing element effect */}
                <BouncingElementLayer>
                    <BouncingElement position="end">
                        <div className="h-[48vw] w-[48vw] sm:h-[24vw] sm:w-[24vw] lg:h-[16vw] lg:w-[16vw]">
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
        </GridTrailView>
    );
}
