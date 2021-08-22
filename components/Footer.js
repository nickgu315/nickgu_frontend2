import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Powered by &copy; NickGu 2021</p>
      <p>
        <Link href='/about'>About</Link>
      </p>
    </footer>
  )
}
