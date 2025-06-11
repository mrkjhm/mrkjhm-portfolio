'use client'

import Lenis from 'lenis';
import {useEffect, useRef} from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Description from "@/components/Description/Description";
import GsapMagnetic from "@/components/GsapMagnetic";
import Landing from "@/components/Landing/Landing";
import Projects from "@/components/Projects/Projects";
import SlidingImages from "@/components/SlidingImages"
import Contact from "@/components/Contact/Contact";

export default function Home() {

    // const container = useRef();
    // const { scrollYProgress } = useScroll({
    //     target: container,
    //     offset: ["start start","end end"]
    // })


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
            <div>
                <Landing />
                <Description />
                <Projects />
                <SlidingImages />
                <Contact />
            </div>
            {/*<div ref={container} className="relative h-[200vh]">*/}
            {/*    <Section1 scrollYProgress={scrollYProgress} />*/}
            {/*    <Section2 scrollYProgress={scrollYProgress} />*/}
            {/*</div>*/}
        </>
    );
}
/*

const Section1 = ({ scrollYProgress }) => {

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])

    return (
        <motion.div style={{scale, rotate}} className="sticky top-0 h-screen bg-gray-500 flex flex-col justify-center items-center">
            <h3 className="font-black text-[5rem]">Section 1</h3>
            <div className="text">
                {/!*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt sapien sed ex suscipit vestibulum. Fusce convallis sem in purus rutrum pellentesque. In eu quam tortor. Pellentesque ipsum lacus, hendrerit pretium condimentum nec, faucibus id nibh. Etiam eu sapien blandit, convallis odio sit amet, rhoncus nunc. Curabitur non blandit tellus. Nullam ullamcorper tincidunt dolor, eu tincidunt quam imperdiet at. Donec dictum ipsum nec elit bibendum efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur eu massa facilisis, sodales magna nec, vehicula neque. Aenean consectetur dapibus nulla.*!/}
            </div>
            <Description />
            <GsapMagnetic>
                <button className="button">Hello</button>
            </GsapMagnetic>
        </motion.div>
    );
}

const Section2 = ({ scrollYProgress }) => {

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

    return (
        <motion.div style={{scale, rotate}} className="relative h-screen bg-blue-500 flex justify-center items-center">
            <h3 className="font-black text-[5rem]">Section 2</h3>
        </motion.div>
    );
}*/
