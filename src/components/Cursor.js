'use client'
import React, {useEffect} from 'react';
import { gsap } from 'gsap';

import './component.css'

export default function Cursor() {

    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        const links = document.querySelectorAll('a');
        const cursorText = document.querySelector('.cursor-text');

        const onMouseMove = (e) => {
            const { clientX, clientY } = e;
            gsap.to(cursor, {x:clientX, y:clientY});
        }

        const onMouseEnterLink = (e) => {
            const link = e.target;
            if (link.classList.contains('view')) {
                gsap.to(cursor, {scale:4})
                cursorText.style.display = 'block';
            } else {
                gsap.to(cursor, {scale:4})
            }
        }

        const onMouseLeaveLink = () => {
            gsap.to(cursor, {scale:1})
            cursorText.style.display = 'none';
        }

        document.addEventListener('mousemove', onMouseMove)
        links.forEach(link => {
            link.addEventListener('mouseenter', onMouseEnterLink)
            link.addEventListener('mouseleave', onMouseLeaveLink)
        })

    }, []);
    return (
        <div id='custom-cursor' className="custom-cursor">
            <span className="cursor-text"></span>
        </div>
    )
}
