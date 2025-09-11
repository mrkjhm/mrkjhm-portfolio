'use client'

import Contact from "@/components/Contact/Contact";
import Description from "@/components/Description/Description";
import DragCards from "@/components/DragCard/DragCard";
import Landing from "@/components/Landing/Landing";
import Projects from "@/components/Projects/Projects";
import Lenis from 'lenis';
import { useEffect } from "react";

export default function Home() {

  // const container = useRef();
  // const { scrollYProgress } = useScroll({
  //     target: container,
  //     offset: ["start start","end end"]
  // })


  useEffect(() => {

    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);




  return (
    <>
      <div>
        <Landing />
        <Description />
        <Projects />
        {/* <SlidingImages /> */}
        <DragCards />
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
