/**
 * a component that contains the application hero section contents
 **/

import { cn } from "@/utils/cn";
import * as motion from "motion/react-client";
import type { HTMLMotionProps } from "motion/react";
import { HeroTitle } from "@/components/ui/home/hero-section/hero-title";
import { HeroDescription } from "@/components/ui/home/hero-section/hero-description";

// motion animations variants for hero section
const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

function HeroSection({ className, ...props }: HTMLMotionProps<"div">) {
    return (
        <motion.div
            className={cn(
                "flex h-screen w-full flex-col items-start justify-center px-8 py-8 lg:px-16",
                className
            )}
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            {...props}
        >
            <HeroTitle />
            <HeroDescription />
        </motion.div>
    );
}

export { HeroSection };
