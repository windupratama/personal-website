/**
 * a component that contains the application hero section title
 **/

import { env } from "@/utils/env";
import * as motion from "motion/react-client";
import { textFromBottomVariants } from "@/animations/textAnimations";
import { GridTrailViewBackLayer } from "../../grid-trail-view";
import { HeroDescription } from "./hero-description";

const titles = env.NEXT_PUBLIC_APP_NAME.split(" ");

function HeroTitle() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-end">
            <GridTrailViewBackLayer>
                <div className="flex w-full items-center justify-between">
                    <div className="flex w-full overflow-hidden">
                        <motion.h1
                            className="font-junicode text-primary -mt-[0.5vw] -mb-[4vw] text-[20vw] leading-none font-thin lg:-mt-[0.25vw] lg:-mb-[3vw] lg:text-[18vw]"
                            variants={textFromBottomVariants}
                        >
                            {titles[0]}
                        </motion.h1>
                    </div>

                    <div className="hidden justify-center md:flex">
                        <HeroDescription />
                    </div>
                </div>
            </GridTrailViewBackLayer>
            <div className="flex w-full justify-end overflow-hidden">
                <motion.h1
                    className="font-redaction-italic text-primary -mt-[0.5vw] -mb-[4vw] text-[20vw] leading-none font-thin lg:-mt-[0.25vw] lg:-mb-[3vw] lg:text-[18vw]"
                    variants={textFromBottomVariants}
                >
                    {titles[1]}
                </motion.h1>
            </div>
        </div>
    );
}

export { HeroTitle };
