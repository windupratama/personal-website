/**
 * a component that contains the application not found contents
 **/

import {
    BouncingElementBackLayer,
    BouncingElementFrontLayer
} from "@/components/ui/bouncing-element";
import { UnderlineHover } from "@/components/ui/underline-hover";
import Link from "next/link";
import { RxArrowTopRight as ArrowTopRight } from "react-icons/rx";
import * as motion from "motion/react-client";
import {
    textFromBlurVariants,
    textFromBottomVariants
} from "@/animations/textAnimations";

// motion animations variants for not found content container
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

function NotFoundContent() {
    return (
        <div className="flex h-full w-full px-8 py-4 lg:px-16">
            <motion.div
                className="flex h-full w-full flex-col justify-end gap-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <BouncingElementBackLayer>
                    <div className="flex w-full overflow-hidden">
                        <motion.h3
                            className="text-primary text-[9vw] leading-none lg:text-[7vw]"
                            variants={textFromBottomVariants}
                        >
                            Are you
                            <span className="font-redaction-italic">
                                &nbsp;Lost?&nbsp;
                            </span>
                            ⚠
                        </motion.h3>
                    </div>
                </BouncingElementBackLayer>
                <div className="flex w-full flex-col justify-between gap-4 lg:flex-row lg:gap-0">
                    <BouncingElementFrontLayer>
                        <div className="flex w-full justify-end overflow-hidden lg:justify-start">
                            <motion.h3
                                className="font-junicode text-primary text-[9vw] leading-none lg:text-[7vw]"
                                variants={textFromBottomVariants}
                            >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/Page Not Found ✖
                            </motion.h3>
                        </div>
                    </BouncingElementFrontLayer>
                    <div className="flex items-center lg:h-full">
                        <BouncingElementFrontLayer>
                            <div className="z-[100] flex h-fit text-white mix-blend-difference">
                                <UnderlineHover>
                                    <motion.div
                                        className="flex items-center gap-2 text-nowrap"
                                        variants={textFromBlurVariants}
                                    >
                                        <Link href="/">Let`s Go Home</Link>
                                        <ArrowTopRight />
                                    </motion.div>
                                </UnderlineHover>
                            </div>
                        </BouncingElementFrontLayer>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export { NotFoundContent };
