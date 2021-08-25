import Link from 'next/link'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import styles from '@/styles/Createwithnick.module.css'

export default function Createwithnick({ evt, handleDelete }) {
  return (
    <div className={styles.project}>
      <h4>
        <Link href={`/projects/${evt.slug}`}>
          <a>{evt.name}</a>
        </Link>
      </h4>
      <Link href={`/projects/edit/${evt.id}`}>
        <a className={styles.edit}>
          <FaPencilAlt /> <span>Edit Project</span>
        </a>
      </Link>
      <a
        href='#'
        className={styles.delete}
        onClick={() => handleDelete(evt.id)}
      >
        <FaTimes /> <span>Delete</span>
      </a>
    </div>
  )
}
