import styles from '@/styles/Showcase.module.css'

export default function Showcase() {
  return (
    <div>
      <div className={styles.showcase}>
        <h1></h1>
        <h2 className={styles.showcasetext}>Hi! My name is Nick Gu and welcome to my site!</h2>
      </div>

      <div className={styles.showcase2}>
        <h3 className={styles.showcase3}>Education: Harvard Graduate School of Design, Master in Architecture (MArchI)</h3>
        <h3 className={styles.showcase3}>
          I co-founded Eone Timepiece Inc. in 2012 when I was still in grad school and we exited in 2020. visit: www.eone-time.com
        </h3>
      </div>
      <div className={styles.showcase2}>
        <h3 className={styles.showcase3}>My Experience</h3>
        <h3 className={styles.showcase3}>
          I am deeply passionate about building products through design and technology that bring values to people. {}
        </h3>
      </div>
    </div>
  )
}
