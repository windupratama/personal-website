/**
 * A component that contains the application hero section title
 */

import * as motion from "motion/react-client";
import { fromBottomVariants } from "@/animations/generalAnimation";
import { env } from "@/utils/env";
import { HeroDescription } from "@/components/ui/home/hero-description";
import { PixelTrailViewBackLayer } from "../pixel-trail-view";

// Hero section title
const titles = env.NEXT_PUBLIC_APP_NAME.split(" ");

/**
 * Displays the hero section title
 */
function HeroTitle() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-end">
            <PixelTrailViewBackLayer>
                <div className="flex w-full items-center justify-between">
                    <div className="flex w-full overflow-hidden">
                        <motion.h1
                            className="font-junicode text-primary -mt-[0.5vw] -mb-[4vw] text-[20vw] leading-none font-thin lg:-mt-[0.25vw] lg:-mb-[3vw] lg:text-[18vw]"
                            variants={fromBottomVariants}
                        >
                            {titles[0]}
                        </motion.h1>
                    </div>
                    <div className="hidden justify-center md:flex">
                        <HeroDescription />
                    </div>
                </div>
            </PixelTrailViewBackLayer>
            <div className="flex w-full justify-end overflow-hidden">
                <motion.h1
                    className="font-redaction-35-italic text-primary -mt-[0.5vw] -mb-[4vw] text-[20vw] leading-none font-thin lg:-mt-[0.25vw] lg:-mb-[3vw] lg:text-[18vw]"
                    variants={fromBottomVariants}
                >
                    {titles[1]}
                </motion.h1>
            </div>
        </div>
    );
}

export { HeroTitle };
