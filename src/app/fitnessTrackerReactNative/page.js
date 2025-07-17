'use client'

import React, {useEffect} from 'react'
import Image from "next/image";
import Link from "next/link";
import Lenis from 'lenis'

import styles from './style.module.scss'
import { fitnessTracker } from "../../../public/images/fitness-tracker/fitnessTracker";
import Rounded from "@/common/RoundedButton";

export default function Page() {

    const clickToResume = () => {
        window.open(
            "https://www.figma.com/design/9nCoAND8s4MWpugmQXwt38/Fitness-Tracker-App?node-id=0-1&t=83okAZVRr9F73qri-1",
            "_blank"
        )
    }

    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, [])

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.body}>
                    <div className={styles.header}>
                        <div className={styles.headerRight}>
                            <Image src={fitnessTracker.fitnessLogo} className={styles.fitnessLogo} alt="Fitness Tracker Logo" />
                            <h3>Fitness Tracker</h3>
                            <p>A simple Fitness Tracker Mobile App</p>
                        </div>
                        <Image src={fitnessTracker.phone1} alt="Fitness Tracker phone mockup" className={styles.phone1} />
                    </div>
                    <div className={styles.bottom}>
                        <Image src={fitnessTracker.phone2} alt="Fitness phone" className={styles.phone2} />
                        <div>
                            <div className={styles.QRDetails}>
                                <div className={styles.qrCodeDetails}>
                                    <h4>Scan to download the App</h4>
                                    <p>*For Android only</p>
                                    <Image src={fitnessTracker.QRcode} alt="QRcode Code" className={styles.qrCode} />

                                </div>
                                <Link href="https://www.figma.com/design/9nCoAND8s4MWpugmQXwt38/Fitness-Tracker-App?node-id=0-1&t=83okAZVRr9F73qri-1" target="_blank" className={styles.figma}>

                                    <Rounded backgroundColor={"rgba(100,28,28,0.59)"} className={styles.button}>
                                        <p type="button"><i className="ri-figma-line"></i> Figma Design </p>

                                    </Rounded>
                                </Link>
                            </div>

                        </div>
                    </div>
                    {/* <div className="xl:bg-amber-400 lg:bg-red-600 md:bg-green-400 sm:bg-orange-700 bg-blue-700">
                        <p className="xl:flex hidden">96rem (1536px) extra large</p>
                        <p className="xl:hidden lg:flex hidden">80rem (1280px) large </p>
                        <p className="lg:hidden md:flex hidden">64rem (1024px) medium</p>
                        <p className="md:hidden sm:flex hidden">48rem (768px) small</p>
                        <p className="sm:hidden flex">40rem (640px) extra small</p>
                    </div>*/}
                </div>
            </div>
        </div>
    )
}

