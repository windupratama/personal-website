/**
 * navbar menu related components and configurations
 **/

"use client";

import { useNavbar } from "@/hooks/useNavbar";
import { motion } from "framer-motion";
import Link from "next/link";

// contains the navbar menu items values (titles and links)
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

// motion animation variants for navbar menu
const navbarMenuVariants = {
    open: {
        height: "100vh",
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    },
    closed: {
        height: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.4
        }
    }
};

const navbarMenuItemsVariants = {
    open: {
        opacity: 1,
        transition: {
            duration: 0.3,
            delay: 0.6
        }
    },
    closed: {
        opacity: 0
    }
};

/**
 * NavbarMenu contains the UI for the active navbar menu status
 **/
function NavbarMenu() {
    const { isOpen } = useNavbar();

    return (
        <motion.nav
            className="fixed top-0 left-0 z-[997] w-full overflow-hidden bg-gradient-to-b from-gray-600/50 to-transparent backdrop-blur-2xl"
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

export { NavbarMenu };
