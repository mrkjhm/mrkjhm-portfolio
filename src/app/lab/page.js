import styles from './styles.module.scss'

export default function Lab() {
    return (
        <>
            <div className="page-content">
                <h1>
                    Lab<sup>(05)</sup>
                </h1>
            </div>
            <div>
                <Section3 />
            </div>
        </>
    )
}

const Section3 = () => {
    return (
        <div className={styles.section}>
            <h2>Section 3</h2>
        </div>
    )
}