import styles from '@/styles/Showcase.module.css'

export default function Showcase() {
  return (
    <div>
      <div className={styles.showcase}>
        <h1></h1>
        <h2 className={styles.showcasetext}>Hi! My name is Nick Gu and welcome to my site!</h2>
      </div>

      <div className={styles.showcase2}>
        <h2 className={styles.showcase3}>Education: Harvard Graduate School of Design, Master in Architecture</h2>
        <h4 className={styles.showcase3}>
          I co-founded Eone Timepiece Inc. in 2012 when I was still in grad school and we exited in 2020. visit: www.eone-time.com
        </h4>
      </div>
      <div className={styles.showcase2}>
        <h2 className={styles.showcase3}>My Experience</h2>
        <h4 className={styles.showcase3}>
          I am deeply passionate about building things and bring value to people. {}
        </h4>
      </div>
    </div>
  )
}
