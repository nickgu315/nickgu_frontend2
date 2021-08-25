import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/ProjectItem.module.css'

export default function ProjectItem({ evt }) {
  return (
    <div className={styles.project}>

      <div className={styles.link}>
        <Link href={`/projects/${evt.slug}`}>
            <a className={styles.img}>
            <Image
              src={
                evt.thumbimage
                  ? evt.thumbimage.formats.small.url
                  : '/images/project-default.png'
              }
              width={300}
              height={300}
            />
            </a>
        </Link>
      </div>

      <div className={styles.info}>
        <Link href={`/projects/${evt.slug}`}>
            <a className={styles.projectitemhead}><strong>{evt.name}</strong></a>
        </Link>
        <h4>{evt.shortd}</h4>
      </div>


    </div>
  )
}
