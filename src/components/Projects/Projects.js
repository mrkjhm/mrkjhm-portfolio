'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import styles from './projects.module.scss'
import Project from '@/components/Projects/components/project';
import Project2 from '@/components/Projects/components/project2';
import Rounded from '../../common/RoundedButton';

const projects = [
    {
        title: "Jadoo",
        src: "jadoo.jpg",
        color: "#f1a501",
        desc: "Personal Project",
        year: "2025",
        link: "https://jadoo-olive.vercel.app/"
    },
    {
        title: "ViewMerce",
        src: "belisitas.jpg",
        color: "#000000",
        desc: "Personal Project",
        link: "https://belisitas.vercel.app/"
    },
    {
        title: "Fitness Tracker",
        src: "fitness_tracker.jpg",
        color: "#8C8C8C",
        desc: "Zuitt Bootcamp Project",
        link: "https://fitlog-peach.vercel.app/"
    },
    // {
    //     title: "Movie Catalog",
    //     src: "movie_catalog.jpg",
    //     color: "#EFE8D3",
    //     desc: "Zuitt Bootcamp Project",
    //     link: "https://movie-catalog-client.vercel.app/"
    // }
]

const projects2 = [
    {
        title: "Jadoo",
        src: "jadoo.jpg",
        color: "#f1a501",
        desc: "Personal Project",
        year: "2025",
        link: "https://jadoo-olive.vercel.app/"
    },
    {
        title: "ViewMerce",
        src: "belisitas.jpg",
        color: "#000000",
        desc: "Personal Project",
        link: "https://belisitas.vercel.app/"
    },
    // {
    //     title: "Fitness Tracker",
    //     src: "fitness_tracker.jpg",
    //     color: "#8C8C8C",
    //     desc: "Zuitt Bootcamp Project",
    //     link: "https://fitness-client-beige.vercel.app/"
    // }
]

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Home() {

    const [modal, setModal] = useState({ active: false, index: 0, link: "" });
    const { active, index } = modal;
    const modalContainer = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);

    const xMoveContainer = useRef(null);
    const yMoveContainer = useRef(null);
    const xMoveCursor = useRef(null);
    const yMoveCursor = useRef(null);
    const xMoveCursorLabel = useRef(null);
    const yMoveCursorLabel = useRef(null);

    useEffect(() => {
        if (modalContainer.current && cursor.current && cursorLabel.current) {
            //Move Container
            xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"});
            yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"});
            //Move cursor
            xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"});
            yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"});
            //Move cursor label
            xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"});
            yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"});
        }
    }, []);



    const moveItems = (x, y) => {
        if (xMoveContainer.current) xMoveContainer.current(x);
        if (yMoveContainer.current) yMoveContainer.current(y);
        if (xMoveCursor.current) xMoveCursor.current(x);
        if (yMoveCursor.current) yMoveCursor.current(y);
        if (xMoveCursorLabel.current) xMoveCursorLabel.current(x);
        if (yMoveCursorLabel.current) yMoveCursorLabel.current(y);
    }

    const manageModal = (active, index, x, y, link = "") => {
        moveItems(x, y);
        setModal({ active, index, link });
    }


    return (
        <main
            onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}}
            onClick={() => {
                if (modal.active) {
                    const project = projects[modal.index];
                    if (project?.link) {
                        window.open(project.link, '_blank');
                    }
                }
            }}
            className={styles.projects}
        >
            {/*<div className="xl:bg-amber-400 lg:bg-red-600 md:bg-green-400 sm:bg-orange-700 bg-blue-700">*/}
            {/*    <p className="xl:flex hidden">96rem (1536px) extra large</p>*/}
            {/*    <p className="xl:hidden lg:flex hidden">80rem (1280px) large </p>*/}
            {/*    <p className="lg:hidden md:flex hidden">64rem (1024px) medium</p>*/}
            {/*    <p className="md:hidden sm:flex hidden">48rem (768px) small</p>*/}
            {/*    <p className="sm:hidden flex">40rem (640px) extra small</p>*/}
            {/*</div>*/}
            <div className={styles.body}>
                {
                    projects.map( (project, index) => {
                        return <Project index={index} title={project.title} link={project.link}  desc={project.desc} manageModal={manageModal} key={index}/>
                    })
                }
            </div>
            <div className={styles.body2}>
                {
                    projects2.map( (project, index) => {
                        return (
                            <div key={index}>
                                <div className={styles.details}>
                                    <Project2
                                        index={index}
                                        title={project.title}
                                        desc={project.desc}
                                        link={project.link}
                                        manageModal={manageModal}
                                        src={project.src}
                                        key={index}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Rounded>
                <Link href="/work">

                    <p>More work</p>
                </Link>
            </Rounded>

            <>
                <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer} >
                    <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
                        {
                            projects.map( (project, index) => {
                                const { src, color } = project
                                return <div className={styles.modal} style={{backgroundColor: color}} key={`modal_${index}`}>
                                    <Image
                                        src={`/images/${src}`}
                                        width={300}
                                        height={200}
                                        alt="image"
                                        priority
                                    />
                                </div>
                            })
                        }
                    </div>
                </motion.div>
                <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
                <motion.div
                    ref={cursorLabel}
                    className={styles.cursorLabel}
                    variants={scaleAnimation}
                    initial="initial"
                    animate={active ? "enter" : "closed"}
                >
                    <a href={projects[index]?.link} target="_blank">
                        View
                    </a>
                </motion.div>
            </>
        </main>
    )
}