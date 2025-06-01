/**
 * A component that contains the application error page contents
 */

import * as motion from "motion/react-client";
import { TextFloodView } from "@/components/ui/text-flood-view";
import { StaggerAnimation } from "@/components/ui/stagger-animation";
import { fromBlurVariants } from "@/animations/generalAnimation";
import { UnderlineHover } from "@/components/ui/underline-hover";
import { MdOutlineRefresh as Refresh } from "react-icons/md";

interface ErrorContentProps {
    reset: () => void;
}

// Contains all the texts to be displayed in the text flood view for the error page
const texts = [
    "ERR!__",
    "**ERROR OCCURRED**",
    "XXX",
    "5XX",
    "⚠︎",
    "⊘⊘⊘",
    ":(",
    "Something broke?",
    "PANIC!**",
    "0x0F41L3D",
];

/**
 * Displays the application error page contents
 */
function ErrorContent({ reset }: ErrorContentProps) {
    return (
        <main className="flex h-[100svh] w-full flex-col items-center justify-center px-4 py-4 lg:px-8">
            <TextFloodView texts={texts} backgroundColor="var(--destructive)" />
            <StaggerAnimation className="flex w-full flex-col justify-between md:flex-row">
                <motion.h5 variants={fromBlurVariants}>
                    Something went wrong, please try again later.
                </motion.h5>
                <UnderlineHover>
                    <motion.div
                        className="flex h-fit text-white mix-blend-difference"
                        variants={fromBlurVariants}
                    >
                        <button
                            className="flex cursor-pointer items-center gap-2 text-nowrap"
                            onClick={() => reset()}
                        >
                            <h5>Refresh</h5>
                            <Refresh />
                        </button>
                    </motion.div>
                </UnderlineHover>
            </StaggerAnimation>
        </main>
    );
}

export { ErrorContent };
