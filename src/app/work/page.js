'use client';
import React, {useEffect, useRef, useState} from "react";
import {motion, useScroll, useTransform} from 'framer-motion';

import styles from './style.module.scss';
import Rounded from '../../common/RoundedButton'
import Works from '@/components/Works/Works'
import Contact from "@/components/Contact/Contact";
import Lenis from "lenis";
import DragCard from "@/components/DragCard/DragCard";



export default function Work() {

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


    const [filter, setFilter] = useState("all")

    return (
        <>
            <div className={styles.work}>
                <div className={styles.container}>
                    <motion.div className={styles.body}>
                        <h1>Design & Development <br/> Showcase</h1>
                    </motion.div>
                    <motion.div className={styles.buttons}>
                        <Rounded
                            onClick={() => setFilter("all")}
                            active={filter === "all"}
                        >
                            <p>All</p>
                        </Rounded>
                        <Rounded
                            onClick={() => setFilter("development")}
                            active={filter === "development"}
                        >
                            <p>Development</p>
                        </Rounded>
                        <Rounded
                            onClick={() => setFilter("graphics")}
                            active={filter === "graphics"}
                        >
                            <p>Graphic Designs</p>
                        </Rounded>
                        {/*<Rounded><p>Figma</p></Rounded>*/}
                    </motion.div>

                    <div className={styles.development}>
                        <Works filter={filter} />
                    </div>
                </div>


                {/*<motion.div style={{height}} className={styles.circleContainer}>*/}
                {/*    <div className={styles.circle}></div>*/}
                {/*</motion.div>*/}
            </div>
            <DragCard />
            <Contact />
        </>
    )
}