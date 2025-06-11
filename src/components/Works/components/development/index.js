'use client'
import React, {useEffect, useRef, useState} from 'react'
import Image from 'next/image';
import styles from './style.module.scss'


export default function Index({ index, title, desc, src, year, color, manageModal }) {



    return (
        <div
            className={styles.main}
            onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}}
            onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}}
        >
            <div className={styles.development}>
                <div className={styles.details}>

                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <p>{year}</p>
                </div>
                <div className={styles.image} style={{ background: color }} onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}}>
                    <Image
                        src={src}
                        width={300}
                        height={200}
                        alt="image"
                    />
                </div>
            </div>
        </div>
    )
}
