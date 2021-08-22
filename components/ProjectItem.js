import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/ProjectItem.module.css'

export default function ProjectItem({ evt }) {
  return (
    <div className={styles.project}>
      <div className={styles.img}>
        <Image
          src={
            evt.image
              ? evt.image.formats.thumbnail.url
              : '/images/project-default.png'
          }
          width={170}
          height={100}
        />
      </div>

      <div className={styles.info}>

        <h3>{evt.name}</h3>
      </div>

      <div className={styles.link}>
        <Link href={`/projects/${evt.slug}`}>
          <a className='btn'>Details</a>
        </Link>
      </div>
    </div>
  )
}
