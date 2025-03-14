/**
 * a component that contains the application hero section description
 **/

import * as motion from "motion/react-client";
import { textFromBlurVariants } from "@/animations/textAnimations";

function HeroDescription() {
    return (
        <div className="flex flex-col items-start gap-4">
            <motion.h1
                className="font-junicode text-primary text-lg lg:text-2xl"
                variants={textFromBlurVariants}
            >
                A Creative Enthusiast Developer.
            </motion.h1>
        </div>
    );
}

export { HeroDescription };
