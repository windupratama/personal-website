/**
 * a component that contains the application hero section title
 **/

import { env } from "@/utils/env";
import * as motion from "motion/react-client";
import { textFromBottomVariants } from "@/animations/textAnimations";
import { GridTrailViewBackLayer } from "../../grid-trail-view";

const titles = env.NEXT_PUBLIC_APP_NAME.split(" ");

function HeroTitle() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-end">
            <GridTrailViewBackLayer>
                <div className="-mb-[4vw] self-start overflow-hidden lg:-mb-[3vw]">
                    <motion.h1
                        className="font-junicode text-primary text-[18vw] leading-none font-thin lg:text-[15vw]"
                        variants={textFromBottomVariants}
                    >
                        {titles[0]}
                    </motion.h1>
                </div>
            </GridTrailViewBackLayer>
            <div className="self-end overflow-hidden lg:self-center">
                <motion.h1
                    className="font-junicode-italic text-primary text-[18vw] leading-none font-thin lg:text-[15vw]"
                    variants={textFromBottomVariants}
                >
                    {titles[1]}
                </motion.h1>
            </div>
        </div>
    );
}

export { HeroTitle };
