'use client'

import React, {useRef} from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import Rounded from '../../../common/RoundedButton'
import Magnetic from '../../../common/Magnetic'
import profile from '../../../../public/images/profile.png'


import styles from './styles.module.scss'


export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start","end end"],
        layoutEffect: false
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, -50])
    const y = useTransform(scrollYProgress, [0, 1], [0, 200])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])

    return (
        <>
            <motion.div style={{y}} ref={container} className={styles.content}>
                <div className={styles.body}>
                    {/*<div className="xl:bg-amber-400 lg:bg-red-600 md:bg-green-400 sm:bg-orange-700 bg-blue-700">
                        <p className="xl:flex hidden">96rem (1536px) extra large</p>
                        <p className="xl:hidden lg:flex hidden">80rem (1280px) large </p>
                        <p className="lg:hidden md:flex hidden">64rem (1024px) medium</p>
                        <p className="md:hidden sm:flex hidden">48rem (768px) small</p>
                        <p className="sm:hidden flex">40rem (640px) extra small</p>
                    </div>*/}
                    <div className={styles.title}>
                        <span>
                            <div className={styles.imageContainer}>
                                <Image src={profile} alt="profile" />
                            </div>
                            <h2>Let's work</h2>
                        </span>
                        <h2>together</h2>
                        <motion.div style={{x}} className={styles.buttonContainer}>
                                <Link href="/contact">
                            <Rounded backgroundColor={"#407bbf"} className={styles.button}>
                                    <p>Get in touch</p>
                            </Rounded>
                                </Link>
                        </motion.div>
                    </div>
                    <div className={styles.nav}>
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
            </motion.div>
        </>
    )
}
