import React from 'react';
import styles from './style.module.scss';
import Image from "next/image";

export default function Index({ index, title, desc, src, manageModal,  link}) {

    return (
        <div

            onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY, link)}}
            onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY, link)}}
            className={styles.main}>
            <Image
                src={`/images/${src}`}
                width={500}
                height={500}
                alt="image"
            />
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}
