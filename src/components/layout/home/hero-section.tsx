/**
 * a component that contains the application hero section contents
 **/

import { cn } from "@/utils/cn";
import * as motion from "motion/react-client";
import type { HTMLMotionProps } from "motion/react";
import { HeroTitle } from "@/components/ui/home/hero-section/hero-title";
import { GridTrailView } from "@/components/ui/grid-trail-view";
import { HeroDescription } from "@/components/ui/home/hero-section/hero-description";

// motion animations variants for hero section container
const containerVariants = {
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
        <GridTrailView>
            <motion.div
                className={cn(
                    "flex h-[100svh] w-full flex-col items-start justify-center gap-4 px-8 py-4 lg:px-16",
                    className
                )}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                {...props}
            >
                <HeroTitle />
                <div className="flex justify-center md:hidden">
                    <HeroDescription />
                </div>
            </motion.div>
        </GridTrailView>
    );
}

export { HeroSection };
