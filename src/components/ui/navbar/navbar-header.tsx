/**
 * navbar header related components and configurations
 **/

"use client";

import { useNavbar } from "@/hooks/useNavbar";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import Link from "next/link";

interface NavbarTriggerProps {
    children: React.ReactNode;
}

// motion animation variants for navbar header
export const navbarHeaderVariants = {
    open: { color: "white" },
    closed: { color: "black" }
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
            <motion.h1
                className="font-junicode text-4xl uppercase transition-all duration-300"
                initial="closed"
                variants={navbarHeaderVariants}
                animate={isOpen ? "open" : "closed"}
            >
                WP.
            </motion.h1>
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
        <h1 className="relative inline-block cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-current before:transition-all before:duration-300 before:content-[''] hover:before:w-full">
            {isOpen ? "Close" : "Menu"}
        </h1>
    );
}

export { NavbarHeader };
