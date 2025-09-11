import Image from "next/image";
import styles from './style.module.scss';

export default function Index({ index, title, desc, src, manageModal, link, color }) {

  return (
    <div
      onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY, link) }}
      onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY, link) }}
      className={styles.main} style={{ background: color }}>
      <div style={{ background: color, }}>
        <Image
          src={`/images/${src}`}
          width={500}
          height={500}
          alt="image"
          className="image"
        />
      </div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}
