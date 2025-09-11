"use client";
import Project from "@/components/Projects/components/project";
import Project2 from "@/components/Projects/components/project2";
import { developmentList } from "@/components/Works/components/developmentList";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Rounded from "../../common/RoundedButton";
import styles from "./projects.module.scss";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0, link: "" });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const cardsRef = useRef(null);
  const isInView = useInView(cardsRef, { once: true, margin: "-100px" });

  const xMoveContainer = useRef(null);
  const yMoveContainer = useRef(null);
  const xMoveCursor = useRef(null);
  const yMoveCursor = useRef(null);
  const xMoveCursorLabel = useRef(null);
  const yMoveCursorLabel = useRef(null);

  useEffect(() => {
    if (modalContainer.current && cursor.current && cursorLabel.current) {
      //Move Container
      xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
        duration: 0.8,
        ease: "power3",
      });
      yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
        duration: 0.8,
        ease: "power3",
      });
      //Move cursor
      xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
        duration: 0.5,
        ease: "power3",
      });
      yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
        duration: 0.5,
        ease: "power3",
      });
      //Move cursor label
      xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
        duration: 0.45,
        ease: "power3",
      });
      yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
        duration: 0.45,
        ease: "power3",
      });
    }
  }, []);

  const moveItems = (x, y) => {
    if (xMoveContainer.current) xMoveContainer.current(x);
    if (yMoveContainer.current) yMoveContainer.current(y);
    if (xMoveCursor.current) xMoveCursor.current(x);
    if (yMoveCursor.current) yMoveCursor.current(y);
    if (xMoveCursorLabel.current) xMoveCursorLabel.current(x);
    if (yMoveCursorLabel.current) yMoveCursorLabel.current(y);
  };

  const manageModal = (active, index, x, y, link = "") => {
    moveItems(x, y);
    setModal({ active, index, link });
  };

  return (
    <main
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      onClick={() => {
        if (modal.active) {
          const project = developmentList[modal.index];
          if (project?.link) {
            window.open(project.link, "_blank");
          }
        }
      }}
      className={styles.projects}
    >
      <div className={styles.body}>
        {developmentList.slice(0, 4).map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              link={project.link}
              desc={project.desc}
              manageModal={manageModal}
              key={index}
            />
          );
        })}
      </div>
      <motion.div
        ref={cardsRef}
        className={styles.body2}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.1
            }
          }
        }}
      >
        {developmentList.slice(0, 4).map((project, index) => {
          return (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,

                },
                visible: {
                  opacity: 1,
                  y: 0,

                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }
              }}
            >
              <div className={styles.details}>
                <Project2
                  index={index}
                  title={project.title}
                  desc={project.desc}
                  link={project.link}
                  manageModal={manageModal}
                  src={project.src}

                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <Rounded>
        <Link href="/work">
          <p>More work</p>
        </Link>
      </Rounded>

      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}
        >
          <div
            style={{ top: index * -100 + "%" }}
            className={styles.modalSlider}
          >
            {developmentList.slice(0, 4).map((project, index) => {
              const { src, color } = project;
              return (
                <div
                  className={styles.modal}
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  <Image
                    src={`/images/${src}`}
                    width={300}
                    height={200}
                    alt="image"
                    priority
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          <a href={developmentList[index]?.link} target="_blank">
            View
          </a>
        </motion.div>
      </>
    </main >
  );
}
