import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/ProjectItem.module.css'

export default function ProjectItem({ evt }) {
  return (
    <div className={styles.project}>
      <div className={styles.img}>

        <Image
          src={
            evt.thumbimage
              ? evt.thumbimage.formats.small.url
              : '/images/project-default.png'
          }
          width={150}
          height={150}
        />
      </div>

      <div className={styles.info}>

        <h3>{evt.name}</h3>
        <h4>{evt.shortd}</h4>
      </div>

      <div className={styles.link}>
        <Link href={`/projects/${evt.slug}`}>
          <a className={styles.btn}>Details</a>
        </Link>
      </div>
    </div>
  )
}
