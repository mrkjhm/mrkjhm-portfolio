import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './landing.module.scss'
import avatar from '../../../public/assets/avatar1.png'
import Rounded from '../../common/RoundedButton/index'


const DURATION = 0.15;
const STAGGER = 0.025;

const name = "MrkJhm".split("");


export default function Landing() {

    const clickToResume = () => {
        window.open(
            "https://drive.google.com/file/d/1jIOFdci1UAq7Yj912m9NWeZNHjy10pNR/view?usp=sharing",
            "_blank"
        )
    }

    return (
        <div className={styles.landing}>
            <Image
                src={avatar}
                alt="avatar"
                fill={true}
                priority
            />
            <div className={styles.left}>


                <motion.div
                    className={styles.name}
                    initial="initial"
                    whileHover="hovered"
                >
                    <motion.div>
                        {/*<motion.span
                    className="inline-block"
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" },
                        }}>
                        <h2>MrkJhm</h2>
                    </motion.span>*/}
                        {name.map((char, index) => (
                            <motion.span
                                key={index}
                                className="inline-block"
                                variants={{
                                    initial: { y: 0 },
                                    hovered: { y: "-100%" },
                                }}
                                transition={{
                                    duration: DURATION,
                                    ease: "easeInOut",
                                    delay: STAGGER * index,
                                }}
                            >
                                <h2>{char}</h2>

                            </motion.span>

                        ))}
                    </motion.div>
                    <motion.div className={styles.name2}>
                        {name.map((char, index) => (
                            <motion.span
                                key={index}
                                className="inline-block"
                                variants={{
                                    initial: { y: "100%" },
                                    hovered: { y: 0 },
                                }}
                                transition={{
                                    duration: DURATION,
                                    ease: "easeInOut",
                                    delay: STAGGER * index,
                                }}
                            >
                                <h2>{char}</h2>

                            </motion.span>

                        ))}
                    </motion.div>

                </motion.div>
                <div className={styles.description}>
                    <p>I’m a Multimedia Designer and Zuitt bootcamper <br/> with Full-Stack Web Development.</p>

                </div>
            </div>
            <div className={styles.title}>
                <i className={`ri-arrow-right-down-long-line ${styles.icon}`}></i>
                <h2>
                    Multimedia <br/>
                    Designer & Developer
                </h2>
                <span>Based in Laguna, Philippines</span>
                <Rounded backgroundColor={"#407bbf"}>
                    <p type="button" onClick={clickToResume}
                    >Download CV</p>
                </Rounded>
            </div>
            <video src="/background-video.mp4" autoPlay loop muted />
        </div>
    )
}
