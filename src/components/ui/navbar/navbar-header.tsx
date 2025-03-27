/**
 * navbar header related components and configurations
 **/

"use client";

import { useNavbar } from "@/hooks/useNavbar";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import Link from "next/link";
import { UnderlineHover } from "@/components/ui/underline-hover";

interface NavbarTriggerProps {
    children?: React.ReactNode;
}

// motion animation variants for navbar header
export const navbarHeaderVariants = {
    open: { color: "white" },
    closed: { color: "white" }
};

/**
 * NavbarHeader contains navbar title and navbar menu trigger
 **/
function NavbarHeader() {
    const { isOpen } = useNavbar();

    return (
        <motion.div
            className={cn(
                "fixed z-[998] flex h-fit w-full items-center justify-between px-8 py-4 lg:px-16"
            )}
            style={{
                mixBlendMode: isOpen ? "normal" : "difference"
            }}
            initial="closed"
            variants={navbarHeaderVariants}
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
 * NavbarTitle displays the app initial title
 **/
function NavbarTitle() {
    const { isOpen } = useNavbar();

    return (
        <Link href="/">
            <motion.h5
                className="font-junicode text-4xl uppercase transition-all duration-300"
                initial="closed"
                variants={navbarHeaderVariants}
                animate={isOpen ? "open" : "closed"}
            >
                WP.
            </motion.h5>
        </Link>
    );
}

/**
 * NavbarTrigger acts as a trigger to toggle navbar status
 **/
function NavbarTrigger({ children }: NavbarTriggerProps) {
    const { isOpen, toggleNavbar } = useNavbar();

    return (
        <motion.button
            onClick={toggleNavbar}
            className="cursor-pointer transition-all duration-300"
            initial="closed"
            variants={navbarHeaderVariants}
            animate={isOpen ? "open" : "closed"}
        >
            {children}
        </motion.button>
    );
}

/**
 * NavbarTitle displays the app navbar menu text
 **/
function NavbarMenuText() {
    const { isOpen } = useNavbar();

    return (
        <UnderlineHover className="before:bg-white">
            <h5>{isOpen ? "Close" : "Menu"}</h5>
        </UnderlineHover>
    );
}

export { NavbarHeader };
