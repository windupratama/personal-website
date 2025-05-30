/**
 * Navbar header related components and configurations
 */

"use client";

import { motion, Variants } from "motion/react";
import { useNavbar } from "@/hooks/useNavbar";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { UnderlineHover } from "@/components/ui/underline-hover";

interface NavbarTriggerProps {
    children?: React.ReactNode;
}

// An animation variants for animating the text color change when the navbar is open or closed
const navbarHeaderColorVariants: Variants = {
    open: { color: "white" },
    closed: { color: "white" },
};

/**
 * Displays navbar title and navbar menu
 */
function NavbarHeader() {
    const { isOpen } = useNavbar();

    return (
        <motion.div
            className={cn(
                "fixed z-[998] flex h-fit w-full items-center justify-between px-4 py-4 lg:px-8",
            )}
            style={{
                mixBlendMode: isOpen ? "normal" : "difference",
            }}
            initial="closed"
            variants={navbarHeaderColorVariants}
            animate={isOpen ? "open" : "closed"}
        >
            <NavbarTitle />
            <NavbarTrigger>
                <NavbarMenuText />
            </NavbarTrigger>
        </motion.div>
    );
}

/**
 * Displays the application title or it's initials
 */
function NavbarTitle() {
    const { isOpen } = useNavbar();

    return (
        <Link href="/">
            <motion.h5
                className="font-junicode text-4xl uppercase transition-all duration-300"
                initial="closed"
                variants={navbarHeaderColorVariants}
                animate={isOpen ? "open" : "closed"}
            >
                WP.
            </motion.h5>
        </Link>
    );
}

/**
 * A trigger to toggle navbar status
 */
function NavbarTrigger({ children }: NavbarTriggerProps) {
    const { isOpen, toggleNavbar } = useNavbar();

    return (
        <motion.button
            onClick={toggleNavbar}
            className="cursor-pointer transition-all duration-300"
            initial="closed"
            variants={navbarHeaderColorVariants}
            animate={isOpen ? "open" : "closed"}
        >
            {children}
        </motion.button>
    );
}

/**
 * Displays the app navbar menu text
 */
function NavbarMenuText() {
    const { isOpen } = useNavbar();

    return (
        <UnderlineHover className="before:bg-white">
            <h5>{isOpen ? "Close" : "Menu"}</h5>
        </UnderlineHover>
    );
}

export { NavbarHeader };
