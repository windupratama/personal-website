/**
 * A component that contains the application not found page contents
 */

import * as motion from "motion/react-client";
import { TextFloodView } from "@/components/ui/text-flood-view";
import { StaggerAnimation } from "@/components/ui/stagger-animation";
import { fromBlurVariants } from "@/animations/generalAnimation";
import { UnderlineHover } from "@/components/ui/underline-hover";
import Link from "next/link";
import { RxArrowTopRight as ArrowTopRight } from "react-icons/rx";

// Contains all the texts to be displayed in the text flood view for the not found page
const texts = [
    "--Not found--",
    "*Page_LOST!",
    "XXX",
    "404",
    ":(",
    "NOT EXIST!",
    "This page does not exist.",
];

/**
 * Displays the application not found page contents
 */
function NotFoundContent() {
    return (
        <main className="flex h-[100svh] w-full flex-col items-center justify-center px-4 py-4 lg:px-8">
            <TextFloodView texts={texts} />
            <StaggerAnimation className="flex w-full flex-col justify-between md:flex-row">
                <motion.h5 variants={fromBlurVariants}>
                    The page you are looking for is
                    <span className="font-redaction-35-italic">
                        &nbsp;not&nbsp;
                    </span>
                    here, pal.
                </motion.h5>
                <UnderlineHover>
                    <motion.div
                        className="flex h-fit text-white mix-blend-difference"
                        variants={fromBlurVariants}
                    >
                        <Link
                            href={"/"}
                            className="flex items-center gap-2 text-nowrap"
                        >
                            <h5>Go back to home</h5>
                            <ArrowTopRight />
                        </Link>
                    </motion.div>
                </UnderlineHover>
            </StaggerAnimation>
        </main>
    );
}

export { NotFoundContent };
