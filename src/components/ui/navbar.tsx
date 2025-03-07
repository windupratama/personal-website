/**
 * application navbar related components and configurations
 **/

"use client";

import { NavbarProvider } from "@/providers/navbar-provider";
import { useNavbar } from "@/hooks/useNavbar";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import Link from "next/link";

interface NavbarTriggerProps {
    children: React.ReactNode;
}

// Contains the navbar menu items to be displayed
const navbarMenuItems = [
    {
        title: "Home",
        href: "#"
    },
    {
        title: "About",
        href: "#"
    },
    {
        title: "Portfolio",
        href: "#"
    },
    {
        title: "Contact",
        href: "#"
    }
];

// motion animations variants
const navbarMenuVariants = {
    open: {
        height: "100vh",
        borderRadius: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    },
    closed: {
        height: 0,
        borderRadius: "0 0 1rem 1rem",
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.2
        }
    }
};

const navbarHeaderVariants = {
    open: { color: "white" },
    closed: { color: "black" }
};

const navbarMenuItemsVariants = {
    open: {
        opacity: 1,
        transition: {
            duration: 0.3,
            delay: 0.4
        }
    },
    closed: {
        opacity: 0
    }
};

function Navbar() {
    return (
        <NavbarProvider>
            <NavbarContent />
        </NavbarProvider>
    );
}

/**
 * NavbarContent contains navbar header (navbar UI) and navbar menu
 **/
function NavbarContent() {
    return (
        <>
            <NavbarHeader />
            <NavbarMenu />
        </>
    );
}

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
                <h1>{isOpen ? "Close" : "Menu"}</h1>
            </NavbarTrigger>
        </motion.div>
    );
}

/**
 * NavbarTitle displays the app initial
 **/
function NavbarTitle() {
    const { isOpen } = useNavbar();

    return (
        <Link href="/">
            <motion.h1
                className="font-junicode text-3xl uppercase transition-all duration-300 lg:text-4xl"
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
 * NavbarMenu contains the UI for the active navbar menu status
 **/
function NavbarMenu() {
    const { isOpen } = useNavbar();

    return (
        <motion.nav
            className="bg-primary fixed top-0 left-0 z-[997] w-full overflow-hidden"
            initial="closed"
            variants={navbarMenuVariants}
            animate={isOpen ? "open" : "closed"}
        >
            <NavbarMenuItems />
        </motion.nav>
    );
}

/**
 * NavbarMenuItems displays the navbar menu items
 **/
function NavbarMenuItems() {
    const { isOpen } = useNavbar();

    return (
        <motion.ul
            className="font-junicode flex h-full flex-col items-center justify-center gap-4 text-4xl text-white lg:text-5xl"
            initial="closed"
            variants={navbarMenuItemsVariants}
            animate={isOpen ? "open" : "closed"}
        >
            {navbarMenuItems.map((menu, index) => (
                <li
                    key={index}
                    className="relative cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
                >
                    <Link href={menu.href}>{menu.title}</Link>
                </li>
            ))}
        </motion.ul>
    );
}

export { Navbar };
