/**
 * A component that contains the application hero section contents
 */

import type { HTMLMotionProps } from "motion/react";
import { StaggerAnimation } from "@/components/ui/stagger-animation";
import { cn } from "@/utils/cn";
import { HeroTitle } from "@/components/ui/home/hero-title";
import { HeroDescription } from "@/components/ui/home/hero-description";
import { PixelTrailView } from "@/components/ui/pixel-trail-view";

type HeroSectionProps = HTMLMotionProps<"div">;

/**
 * Displays the application hero section contents
 */
function HeroSection({ className, ...props }: HeroSectionProps) {
    return (
        <PixelTrailView>
            <StaggerAnimation
                className={cn(
                    "flex h-[100svh] w-full flex-col items-start justify-center gap-4 px-4 py-4 lg:px-8",
                    className,
                )}
                {...props}
            >
                <HeroTitle />
                <div className="flex justify-center md:hidden">
                    <HeroDescription />
                </div>
            </StaggerAnimation>
        </PixelTrailView>
    );
}

export { HeroSection };
