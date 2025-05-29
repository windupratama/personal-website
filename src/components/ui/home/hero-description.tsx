/**
 * A component that contains the application hero section description
 */

import * as motion from "motion/react-client";
import { fromBlurVariants } from "@/animations/generalAnimation";

// Hero section description
const mainDescription = "A creative and enthusiast developer.";
const locationDescription = "Based in Indonesia.";

/**
 * Displays the hero section description
 */
function HeroDescription() {
    return (
        <div className="flex flex-col items-start">
            <motion.h1
                className="font-junicode text-primary text-xl lg:text-2xl"
                variants={fromBlurVariants}
            >
                {mainDescription}
            </motion.h1>
            <motion.h5
                className="font-junicode text-primary text-md lg:text-lg"
                variants={fromBlurVariants}
            >
                {locationDescription}
            </motion.h5>
        </div>
    );
}

export { HeroDescription };
