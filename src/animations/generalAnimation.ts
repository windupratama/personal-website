/**
 * A various Motion general animation variants
 */

import { Variants } from "motion/react";

/**
 * An animation variants that animates the object from bottom to original position
 */
const fromBottomVariants: Variants = {
    hidden: {
        y: "100%",
        opacity: 0,
        filter: "blur(8px)",
    },
    visible: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};

/**
 * An animation variants that animates the object from a blurry effect to original state
 */
const fromBlurVariants: Variants = {
    hidden: {
        opacity: 0,
        filter: "blur(8px)",
    },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};

export { fromBottomVariants, fromBlurVariants };
