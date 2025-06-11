'use client';

import React, { useRef, useEffect } from 'react';
import { useInView, motion } from 'framer-motion';
import Link from 'next/link';
import { slideUp, opacity} from "@/components/Description/animation";
import Rounded from '../../common/RoundedButton'


import styles from './description.module.scss'

export default function Description() {

    const phrase = "I’m a Multimedia Designer and Zuitt bootcamper\n" +
        "with Full-Stack Web Development.";

    const description = useRef(null);
    const isInView = useInView(description, { once: true, margin: '-100px' });


    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {
                        phrase.split(" ").map((word, index) => (
                            <span key={index} className={styles.mask}>
                                <motion.span
                                    variants={slideUp}
                                    custom={index}
                                    animate={isInView ? "open" : "closed"}
                                    initial="closed"
                                >
                                    {word}&nbsp;
                                </motion.span>
                            </span>
                        ))
                    }
                </p>
                <motion.p
                    variants={opacity}
                    animate={isInView ? "open" : "closed"}
                    initial="closed"
                >
                    Using creative design and coding skills together to make websites that look great and work well, including images, videos, and interactive features.
                </motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Link href="/about">
                        <Rounded backgroundColor={"#407bbf"} className={styles.button}>
                            <p>About me</p>
                        </Rounded>
                    </Link>
                </div>
            </div>
        </div>
    )
}
