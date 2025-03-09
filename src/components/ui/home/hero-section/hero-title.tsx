import { env } from "@/utils/env";
import * as motion from "motion/react-client";
import { textFromBottomVariants } from "@/animations/textAnimations";

const titles = env.NEXT_PUBLIC_APP_NAME.split(" ");

function HeroTitle() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-end">
            <motion.h1
                className="font-junicode text-primary self-start text-[18vw] leading-none font-thin lg:text-[15vw]"
                variants={textFromBottomVariants}
            >
                {titles[0]}
            </motion.h1>
            <motion.h1
                className="font-junicode-italic text-primary self-end text-[18vw] leading-none font-thin lg:self-center lg:text-[15vw]"
                variants={textFromBottomVariants}
            >
                {titles[1]}
            </motion.h1>
        </div>
    );
}

export { HeroTitle };
