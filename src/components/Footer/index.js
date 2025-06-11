'use client';

import React, {useRef} from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'

import Magnetic from '@/common/Magnetic'
import styles from './style.module.scss'



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
            <motion.div /*style={{y}}*/ className={styles.info} ref={container}>
                <div>
                    <span>
                        <h3>Version</h3>
                        <p>2025 @ Edition</p>
                    </span>
                </div>
                <div>
                    <span>
                        <h3>Socials</h3>
                        <Magnetic>
                             <a href="https://github.com/mrkjhm" target="_blank" rel="noopener noreferrer">
                                <p>Github</p>
                            </a>
                        </Magnetic>
                    </span>
                    <Magnetic>
                        <a href="https://www.behance.net/markjhemamerna" target="_blank" rel="noopener noreferrer">
                            <p>Behance</p>
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a href="https://www.linkedin.com/in/mark-jhem-amerna-24b299158/" target="_blank" rel="noopener noreferrer">
                            <p>LinkedIn</p>
                        </a>
                    </Magnetic>
                   {/* <Magnetic>
                        <a href="https://www.figma.com/team_invite/redeem/ByrQ5fmSh03k73DnlVIiJj" target="_blank" rel="noopener noreferrer">
                            <p>Figma</p>
                        </a>
                    </Magnetic>*/}

                </div>
            </motion.div>

        </>
    )
}
