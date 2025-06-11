'use client'

import Image from 'next/image'
import { useEffect, useState } from "react"
import styles from './about.module.scss'
import Contact from '@/components/Contact/Contact'

import Dots from '@/common/Dots'
import Lenis from "lenis";

const details = [
    {
        number: "01",
        title: "Graphic/video Editing",
        description: "Creating and improving images or videos by adding effects, trimming, or adjusting visuals to make them more engaging and professional."
    },
    {
        number: "02",
        title: "Web Development",
        description: "Building websites and web applications that people can use online, including the structure, features, and how they work."
    },
    {
        number: "03",
        title: "Web Design",
        description: "Creating the layout, colors, and style of a website using Figma to make it look good and easy to use for visitors."
    },
    {
        number: "04",
        title: "Responsive Website",
        description: "A website designed to automatically adjust and look good on all screen sizes, whether it’s a phone, tablet, laptop, or desktop computer."
    }
]

export default function About() {

    const [dotCount, setDotCount] = useState(0)

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


    useEffect(() => {
        const interval = setInterval(() => {
            setDotCount(prev => (prev + 1) % 4) // cycles 0 → 3
        }, 500) // 500ms per step

        return () => clearInterval(interval)
    }, [])

    return (
        <>

            <div className={styles.about}>
                <div className={styles.container}>
                    {/*<div className="xl:bg-amber-400 lg:bg-red-600 md:bg-green-400 sm:bg-orange-700 bg-blue-700">
                        <p className="xl:flex hidden">96rem (1536px) extra large</p>
                        <p className="xl:hidden lg:flex hidden">80rem (1280px) large </p>
                        <p className="lg:hidden md:flex hidden">64rem (1024px) medium</p>
                        <p className="md:hidden sm:flex hidden">48rem (768px) small</p>
                        <p className="sm:hidden flex">40rem (640px) extra small</p>
                    </div>*/}
                    <div className={styles.body}>
                        <h1>Turning creative vision <br/>
                            into digital impact</h1>
                    </div>
                    <div className={styles.image}>
                        <div className={styles.hi}>
                            {/*<i className="ri-arrow-right-long-line"></i>*/}
                            <h2>I’m a self-taught Multimedia Designer passionate about storytelling through branding, video editing, and crafting eye-catching visuals for social media. As I expand my skills into Full-Stack Web Development, I enjoy creating easy-to-use websites, blending creativity and technical skills to bring ideas to life in both design and digital projects.</h2>

                            {/*<div className={styles.dots}>
                                <p>Always exploring{".".repeat(dotCount)}</p>
                            </div>*/}
                        </div>
                        <div className={styles.profile}>
                            <Image
                                src="/images/profile_img.JPG"
                                width={1000}
                                height={1000}
                                alt="profile"
                            />
                        </div>

                    </div>

                    <div className={styles.details}>
                        <h2>I can help you with{".".repeat(dotCount)}</h2>
                        <div className={styles.list}>
                            {
                                details.map((item, index) => (
                                    <div key={index}>
                                        <p>{item.number}</p>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>


            </div>
            <Contact />
        </>
    )
}

