import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import styles from './dragcard.module.scss'
import Rounded from '@/common/RoundedButton';
import Link from "next/link";



export default function DragCards()  {
    return (
        <>
            <div className={styles.main}>
                <section className={styles.dragcard}>
                    <h2>
                        Graphics<span>.</span> <br/> <span className={styles.design}>Designs</span>
                    </h2>
                    <Cards />

                        <div className={styles.button}>
                            <Rounded
                                backgroundColor={"#4095bf"}>
                                <a href="https://www.behance.net/gallery/229893349/Portfolio-2025" target="_blank" rel="noopener noreferrer">
                                    <p>Behance</p>
                                </a>
                            </Rounded>
                        </div>

                </section>
            </div>
        </>
    );
};

const Cards = () => {
    const containerRef = useRef(null);

    return (
        <div className="absolute inset-0 z-10" ref={containerRef}>

            <Card
                containerRef={containerRef}
                src="/images/Image_1.jpg"
                alt="Example image"
                rotate="6deg"
                top="20%"
                left="25%"
                className="w-36 md:w-56"
            />
            <Card
                containerRef={containerRef}
                src="/images/Image_2.jpg"
                alt="Example image"
                rotate="12deg"
                top="45%"
                left="60%"
                className="w-24 md:w-48"
            />
            <Card
                containerRef={containerRef}
                src="/images/Image_7.jpg"
                alt="Example image"
                rotate="-10deg"
                top="50%"
                left="30%"
                className="w-48 md:w-52"
            />
            <Card
                containerRef={containerRef}
                src="/images/Image_4.jpg"
                alt="Example image"
                rotate="8deg"
                top="45%"
                left="43%"
                className="w-48 md:w-60"
            />
            <Card
                containerRef={containerRef}
                src="/images/Image_5.jpg"
                alt="Example image"
                rotate="18deg"
                top="20%"
                left="60%"
                className="w-40 md:w-64"
            />
            <Card
                containerRef={containerRef}
                src="/images/Chocolatey-Choices_FA.jpg"
                alt="Example image"
                rotate="-3deg"
                top="35%"
                left="55%"
                className="w-24 md:w-58"
            />
            <Card
                containerRef={containerRef}
                src="/images/Kit-Sleeves.jpg"
                alt="Example image"
                rotate="-6deg"
                top="15%"
                left="40%"
                className="w-52 md:w-70"
            />
        </div>
    );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
    const [zIndex, setZIndex] = useState(0);

    const updateZIndex = () => {
        const els = document.querySelectorAll(".drag-elements");

        let maxZIndex = -Infinity;

        els.forEach((el) => {
            let zIndex = parseInt(
                window.getComputedStyle(el).getPropertyValue("z-index")
            );

            if (!isNaN(zIndex) && zIndex > maxZIndex) {
                maxZIndex = zIndex;
            }
        });

        setZIndex(maxZIndex + 1);
    };

    return (
        <motion.img
            onMouseDown={updateZIndex}
            style={{
                top,
                left,
                rotate,
                zIndex,
            }}
            className={twMerge(
                "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
                className
            )}
            src={src}
            alt={alt}
            drag
            dragConstraints={containerRef}
            // Uncomment below and remove dragElastic to remove movement after release
            //   dragMomentum={false}
            dragElastic={0.65}
        />
    );
};