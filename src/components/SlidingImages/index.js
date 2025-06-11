import React, {useRef} from 'react'
import Image from 'next/image'
import styles from './style.module.scss'
import {color, useScroll, useTransform, motion} from "framer-motion";


const slider1 = [
    {
        color: "#e3e5e7",
        src: "Image_1.jpg"
    },
    {
        color: "#d6d7dc",
        src: "Image_2.jpg"
    },
    {
        color: "#e3e3e3",
        src: "Image_3.jpg"
    },
    {
        color: "#21242b",
        src: "Image_4.jpg"
    }
]

const slider2 = [
    {
        color: "#d4e3ec",
        src: "Image_5.jpg"
    },
    {
        color: "#e5e0e1",
        src: "Image_6.jpg"
    },
    {
        color: "#d7d4cf",
        src: "Image_7.jpg"
    },
    {
        color: "#e1dad6",
        src: "Kit-Sleeves.jpg"
    }
]

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end","end start"],
        layoutEffect: false // ✅ helps with SSR hydration timing
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [100, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            {/*<div className="xl:bg-amber-400 lg:bg-red-600 md:bg-green-400 sm:bg-orange-700 bg-blue-700">
                <p className="xl:flex hidden">96rem (1536px) extra large</p>
                <p className="xl:hidden lg:flex hidden">80rem (1280px) large </p>
                <p className="lg:hidden md:flex hidden">64rem (1024px) medium</p>
                <p className="md:hidden sm:flex hidden">48rem (768px) small</p>
                <p className="sm:hidden flex">40rem (640px) extra small</p>
            </div>*/}
            <motion.div style={{x: x1}} className={styles.slider}>
                {
                    slider1.map((project, index) => {
                        return <div key={index} style={{backgroundColor: project.color}} className={styles.project}>
                            <div className={styles.imageContainer}>
                                <Image
                                    fill
                                    alt={"image"}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    src={`/images/${project.src}`}
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    })
                }
            </motion.div>
            <motion.div style={{x: x2}} className={styles.slider}>
                {
                    slider2.map((project, index) => {
                        return <div key={index} style={{backgroundColor: project.color}} className={styles.project}>
                            <div className={styles.imageContainer}>
                                <Image
                                    fill={true}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    alt={"image"}
                                    src={`/images/${project.src}`}/>
                            </div>
                        </div>
                    })
                }
            </motion.div>
            {/*<motion.div style={{height}} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>*/}

        </div>
    )
}
