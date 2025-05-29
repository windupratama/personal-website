/**
 * A Motion animation variants that makes the children animated in sequence (stagger)
 */

import { Variants } from "motion/react";

/**
 * An animation variants for making the container children animated in sequence
 */
const staggerVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

export { staggerVariants };
