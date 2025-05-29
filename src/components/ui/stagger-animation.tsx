/**
 * A component that provides a stagger animation effect on it's children
 */

import * as motion from "motion/react-client";
import type { HTMLMotionProps } from "motion/react";
import { staggerVariants } from "@/animations/staggerAnimation";

interface StaggerAnimation extends HTMLMotionProps<"div"> {
    children?: React.ReactNode;
}

/**
 * A container that provides a stagger animation effect on it's children
 */
function StaggerAnimation({ children, ...props }: StaggerAnimation) {
    return (
        <motion.div
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            {...props}
        >
            {children}
        </motion.div>
    );
}

export { StaggerAnimation };
