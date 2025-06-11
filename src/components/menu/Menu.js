'use client' // This tells Next.js that this is a client-side component (because you're using hooks like useState).

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from "gsap"; // Importing GSAP for animations.
import { useGSAP } from "@gsap/react" // Importing the React plugin for GSAP.
import { motion, AnimatePresence} from "framer-motion";

import './menu.css' // Importing your menu styles.
import GsapMagnetic from "@/components/GsapMagnetic";


// Define your navigation links in an array for easy mapping later.
const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/work", label: "Works" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" }
]

const DURATION = 0.15;
const STAGGER = 0.025;

export default function Menu() {

    const container = useRef(); // Create a reference to the main menu container (for GSAP's scoping).
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Track whether the menu is open or closed.

    const tl = useRef(null); // Store the GSAP timeline instance so we can control play/reverse.

    // Function to toggle menu open/close
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // Setup GSAP animations when the component is first rendered
    useGSAP(() => {
        // Set initial state: push each menu link 75px downward
        gsap.set(".menu-link-item-holder", { y: 75 });

        // Create a GSAP timeline animation, paused by default
        tl.current = gsap.timeline({ paused: true })
            .to(".menu-overlay", {
                duration: 1.25,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Expands the overlay from a hidden state to fully visible
                ease: "power4.inOut"
            })
            .to(".menu-link-item-holder", {
                y: 0, // Animate menu links back to their normal position
                duration: 0.4,
                stagger: 0.1, // Animate them one after another (staggered effect)
                ease: "power4.inOut",
                delay: -0.75, // Start this part of the animation before the overlay is fully done
            })
    }, { scope: container }); // Scope all the selectors to the `container` div (more efficient and safer)

    // Play or reverse the animation whenever isMenuOpen changes
    useEffect(() => {
        if (isMenuOpen) {
            tl.current.play(); // Open the menu
        } else {
            tl.current.reverse(); // Close the menu
        }
    }, [isMenuOpen]);

    return (
        <div className="menu-container" ref={container}> {/* Attach ref to main container */}
            {/* Top bar with logo and open menu button */}
            <div className="menu-bar">
                <div className="menu-logo">
                    <Link href="/">
                        <GsapMagnetic>
                            <div className="menu-logo1">
                            <span>Mrkjhm</span>
                            <span>Amerna</span>
                            </div>
                        </GsapMagnetic>
                    </Link> {/* Clicking logo goes to home */}
                </div>
                <GsapMagnetic>

                    <div className="menu-open" onClick={toggleMenu}>
                        <p>Menu</p> {/* Clicking 'Menu' toggles menu open */}
                    </div>
                </GsapMagnetic>
            </div>

            {/* Fullscreen overlay menu (hidden initially, animated open) */}
            <div

                className="menu-overlay"
            >
                {/* Top bar inside overlay with logo and close menu button */}
                <div className="menu-overlay-bar">
                    <div className="menu-logo">
                        <Link href="/">
                            <GsapMagnetic>
                                <div className="menu-logo1">
                                <span>Mrkjhm</span>
                                <span>Amerna</span>
                                </div>
                            </GsapMagnetic>
                        </Link> {/* Same logo link inside the menu */}
                    </div>
                    <GsapMagnetic>
                        <motion.div className="menu-close" onClick={toggleMenu}>
                            <motion.p>Close</motion.p> {/* Clicking 'Close' toggles menu closed */}
                        </motion.div>
                    </GsapMagnetic>
                </div>

                {/* Optional close icon (×) for aesthetic */}
                <div className="menu-close-icon" onClick={toggleMenu}>
                    <p>&#215;</p> {/* Unicode for × */}
                </div>

                {/* Main menu content: links and info */}
                <div

                    className="menu-copy">
                    {/* Navigation links */}
                    <div className="menu-links">
                        {menuLinks.map((link, index) => (
                            <div className="menu-link-item" key={index}>
                                <motion.div
                                    initial="initial"
                                    whileHover="hovered"
                                    className="menu-link-item-holder "
                                >
                                    <motion.div>
                                        <Link href={link.path} className="menu-link"
                                              onClick={toggleMenu}>
                                            {link.label.split("").map((char, index) => (
                                                <motion.span
                                                    key={index}
                                                    variants={{
                                                        initial: { y:0 },
                                                        hovered: { y:"-100%" },
                                                    }}
                                                    transition={{
                                                        duration: DURATION,
                                                        ease: "easeInOut",
                                                        delay: STAGGER * index,
                                                    }}
                                                    className="inline-block"
                                                >
                                                    {char}
                                                </motion.span>
                                            ))}
                                        </Link>
                                    </motion.div>

                                    <motion.div className="menu2">
                                        <Link href={link.path} className="menu-link" onClick={toggleMenu}>
                                            {link.label.split("").map((char, index) => (
                                                <motion.span
                                                    key={index}
                                                    variants={{
                                                        initial: { y:"100%" },
                                                        hovered: { y:0 },
                                                    }}
                                                    transition={{
                                                        duration: DURATION,
                                                        ease: "easeInOut",
                                                        delay: STAGGER * index,
                                                    }}
                                                    className="inline-block"
                                                >
                                                    {char}
                                                </motion.span>
                                            ))}
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* Info section: social links and contact info */}
                    <div className="menu-info">
                        {/* Social links */}
                        <div className="menu-info-col">
                            <a href="https://github.com/mrkjhm" target="_blank" rel="noopener noreferrer">Github &#8599;</a>
                            <a href="https://www.behance.net/markjhemamerna" target="_blank" rel="noopener noreferrer">Behance &#8599;</a>
                            <a href="https://www.linkedin.com/in/mark-jhem-amerna-24b299158/" target="_blank" rel="noopener noreferrer">LinkedIn &#8599;</a>
                        </div>
                        {/* Contact info */}
                        <div className="menu-info-col">
                            <p>info@mrkjhm.com</p>
                            <p>1234 567 8910</p>
                        </div>
                    </div>
                </div>

                {/* Extra section: button or call-to-action */}
                {/*<div className="menu-preview">*/}
                {/*    <p>View Showreel</p> /!* Could be linked to a video or portfolio page *!/*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
