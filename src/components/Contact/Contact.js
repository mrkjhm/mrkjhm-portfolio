import React from 'react'
import styles from './footer.module.scss'
import Index from "@/components/Contact/Components";

export default function Contact() {
    return (
        <div className={styles.footer}
            // style={{clipPath: "polygon(0% 0, 100% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
            <div className="">
                <Index />
            </div>
        </div>
    )
}
