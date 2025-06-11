import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

import styles from './graphic.module.scss';
import GsapMagnetic from '@/components/GsapMagnetic'
import Rounded from '@/common/RoundedButton'
const graphics = [
    { src: "Image_1.jpg" },
    { src: "Image_2.jpg" },
    { src: "Serbisyong-Angat-to-Kaibigan-Streamer.jpg" },
    { src: "Image_3.jpg" },
    { src: "Image_4.jpg" },
    { src: "Image_5.jpg" },
    { src: "Kit-Sleeves.jpg" },
    { src: "Landing-page-1.jpg" },
    { src: "Chocolatey-Choices_FA.jpg" },
    { src: "Image_6.jpg" },
    { src: "Image_7.jpg" },
];

export default function Index() {
    const container = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null); // for modal

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
        layoutEffect: true,
    });

    const height = useTransform(scrollYProgress, [0, 0.9], [20, 0]);

    return (
        <div ref={container} className={styles.design}>
            <div className={styles.title}>
                <p>Graphic Design</p>

               {/* <div className={styles.button}>
                    <Rounded
                        backgroundColor={"#1c1d20"}>
                        <p>Behance</p>
                    </Rounded>
                </div>*/}

            </div>
            <div className={styles.body}>
                <div className={styles.graphic}>
                    {graphics.map((graphic, index) => (
                        <div key={index} onClick={() => setSelectedImage(graphic.src)} style={{ cursor: 'pointer' }}>
                            <Image
                                src={`/images/${graphic.src}`}
                                width={300}
                                height={200}
                                alt="graphic"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className={styles.modal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={`/images/${selectedImage}`}
                                alt="full view"
                                width={800}     // still required but will be overridden by CSS max sizes
                                height={600}    // still required but will be overridden by CSS max sizes
                                className={styles.fullImage}
                                style={{ width: 'auto', height: 'auto', maxWidth: '90vw', maxHeight: '90vh' }}
                            />
                            <p
                                className={styles.closeButton}
                                onClick={() => setSelectedImage(null)}
                            >
                                ×
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}
