/**
 * Navbar menu related components and configurations
 */

"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "motion/react";
import { useNavbar } from "@/hooks/useNavbar";
import Link from "next/link";
import { UnderlineHover } from "@/components/ui/underline-hover";

// Contains the navbar menu items values (titles and links)
const navbarMenuItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "#",
    },
    {
        title: "Projects",
        href: "#",
    },
    {
        title: "Blog",
        href: "#",
    },
    {
        title: "Contacts",
        href: "#",
    },
];

// An animation variants for animating the show and hide times for the navbar menu when the navbar is open or closed
const navbarMenuVariants: Variants = {
    open: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    closed: {
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.4,
        },
    },
};

// An animation variants for animating each navbar menu item when the navbar is open or closed
const navbarMenuItemsVariants: Variants = {
    open: {
        opacity: 1,
        transition: {
            duration: 0.3,
            delay: 0.6,
        },
    },
    closed: {
        opacity: 0,
    },
};

/**
 * Displays the active navbar menu status
 */
function NavbarMenu() {
    const { isOpen } = useNavbar();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        }
    }, [isOpen]);

    function hideMenuWhenClosed() {
        if (!isOpen) {
            setIsVisible(false);
        }
    }

    return (
        isVisible && (
            <motion.nav
                className="fixed top-0 left-0 z-[997] h-[100svh] w-full overflow-hidden bg-gradient-to-b from-gray-600/50 to-transparent backdrop-blur-2xl"
                initial="closed"
                variants={navbarMenuVariants}
                animate={isOpen ? "open" : "closed"}
                onAnimationComplete={hideMenuWhenClosed}
            >
                <NavbarMenuItems />
            </motion.nav>
        )
    );
}

/**
 * Displays the navbar menu items
 */
function NavbarMenuItems() {
    const { isOpen, toggleNavbar } = useNavbar();

    return (
        <motion.ul
            className="font-junicode flex h-full flex-col items-center justify-center gap-4 text-4xl text-white lg:text-5xl"
            initial="closed"
            variants={navbarMenuItemsVariants}
            animate={isOpen ? "open" : "closed"}
        >
            {navbarMenuItems.map((menu, index) => (
                <li key={index}>
                    <UnderlineHover className="before:bg-white">
                        <Link href={menu.href} onNavigate={toggleNavbar}>
                            {menu.title}
                        </Link>
                    </UnderlineHover>
                </li>
            ))}
        </motion.ul>
    );
}

export { NavbarMenu };
