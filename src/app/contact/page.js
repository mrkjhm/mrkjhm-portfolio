'use client'
import React, {useEffect, useRef} from "react";
import Lenis from "lenis";
import Image from 'next/image'
import {motion, useScroll, useTransform} from "framer-motion";

import './page.css';
import styles from './style.module.scss'
import Rounded from '@/common/RoundedButton'
import Magnetic from '../../common/Magnetic'

import profile from '../../../public/images/profile.png'



export default function Index() {

    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start","end end"]
    })


    useEffect(() => {
        // Create a new instance of the Lenis library.
        // Lenis is often used for smooth scrolling, so this initializes it to handle the scroll behavior.
        const lenis = new Lenis();

        // Define a recursive function called 'raf' (requestAnimationFrame)
        // This function will be used to update the scroll position in the next animation frame
        function raf(time) {
            // The 'lenis.raf(time)' method is called on each frame to update the scroll position.
            // The 'time' parameter is the current timestamp provided by the browser during the animation frame.
            lenis.raf(time);

            // After processing the current frame, we request the next animation frame to continue the smooth scrolling.
            // This makes the scroll behavior smooth and continuous.
            requestAnimationFrame(raf); // Recurse: call 'raf' again for the next animation frame
        }

        // Start the recursive animation loop by calling 'requestAnimationFrame' for the first time.
        // This will trigger the 'raf' function to begin and loop indefinitely, creating smooth scrolling.
        requestAnimationFrame(raf);

        // Empty dependency array ensures this effect only runs once when the component is mounted.
        // It doesn't re-run unless the component is unmounted and remounted.
    }, []); // The empty array means it runs once when the component mounts



    return (
        <>

            <div >
                <div ref={container} className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.body}>
                            <div>
                                <h1>Let's work <br/>
                                    together</h1>
                                {/*<div className="xl:bg-amber-400 lg:bg-red-600 md:bg-green-400 sm:bg-orange-700 bg-blue-700">
                                <p className="xl:flex hidden">96rem (1536px) extra large</p>
                                <p className="xl:hidden lg:flex hidden">80rem (1280px) large </p>
                                <p className="lg:hidden md:flex hidden">64rem (1024px) medium</p>
                                <p className="md:hidden sm:flex hidden">48rem (768px) small</p>
                                <p className="sm:hidden flex">40rem (640px) extra small</p>
                            </div>*/}

                                <div className={styles.contact}>
                                    <Rounded>
                                        <p>
                                            <a href="mailto:markjhemamerna@gmail.com">markjhemamerna@gmail.com</a>
                                        </p>
                                    </Rounded>
                                    <Rounded>
                                        <p>+63 933 4812 127</p>
                                    </Rounded>
                                </div>
                            </div>
                            <div className={styles.social}>
                                {/*<Image src={profile} alt="profile"  />*/}
                                <h3>Socials</h3>
                                <div className={styles.socials}>
                                    <Magnetic>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                            <p>LinkedIn</p>
                                        </a>
                                    </Magnetic>
                                    <Magnetic>
                                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                            <p>Facebook</p>
                                        </a>
                                    </Magnetic>
                                    <Magnetic>
                                        <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
                                            <p>Behance</p>
                                        </a>
                                    </Magnetic>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

