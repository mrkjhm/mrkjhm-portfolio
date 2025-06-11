'use client';
import React from 'react'
import styles from './style.module.scss';

export default function index({index, title, desc, link, manageModal}) {

    return (
        <div
            onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY, link)}}
            onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY, link)}}
            className={styles.project}
        >

            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}
