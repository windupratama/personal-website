import { env } from "@/utils/env";
import { cn } from "@/utils/cn";
import * as motion from "motion/react-client";
import type { HTMLMotionProps } from "motion/react";
import {
    textFromBlurVariants,
    textFromBottomVariants
} from "@/animations/textAnimations";

const titles = env.NEXT_PUBLIC_APP_NAME.split(" ");

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
        <motion.div
            className={cn(
                "flex h-screen w-full flex-col items-center justify-center p-8",
                className
            )}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            {...props}
        >
            <div className="flex h-full w-[75%] flex-col items-center justify-center">
                <motion.h1
                    className="font-junicode text-primary self-start text-[12rem] leading-none"
                    variants={textFromBottomVariants}
                >
                    {titles[0]}
                </motion.h1>
                <motion.h1
                    className="font-junicode-italic text-primary self-end text-[12rem] leading-none"
                    variants={textFromBottomVariants}
                >
                    {titles[1]}
                </motion.h1>
            </div>
            <div className="flex flex-col gap-4">
                <motion.h1
                    className="font-junicode text-primary text-3xl"
                    variants={textFromBlurVariants}
                >
                    Frontend & Backend Developer.
                </motion.h1>
            </div>
        </motion.div>
    );
}

export { HeroSection };
