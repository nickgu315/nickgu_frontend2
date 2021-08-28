import styles from '@/styles/Showcase.module.css'

export default function Showcase() {
  return (
    <div>
      <div className={styles.showcase}>
        <h1></h1>
        <h2 className={styles.showcasetext}>Hi! I'm Nick Gu. <br/> Designer who Codes, with Architectural, Industrial & UI/UX background.</h2>
      </div>

      <div className={styles.showcase2}>
        <h3 className={styles.showcase3}>
        This site is developed to:<br />
        1. Display my pass work as a portfolio site <br />
        2. Strengthen my coding skills as a Fullstack Developer <br />
        3. Connect to like minded people with similar passion
        </h3>
        <h3 className={styles.showcase4}>
          I co-founded Eone Timepiece Inc. in 2012 <br /> when I was still in grad school and we exited in 2020.
          <a href="http://www.eone-time.com" target="_blank" rel="noopener noreferrer">www.eone-time.com</a>

        </h3>
      </div>
      <div className={styles.showcase2}>
        <h3 className={styles.showcase3}>My Education: <br />
        Harvard Graduate School of Design, <br />Master in Architecture (MArchI) <br />-<br />
        The University of Hong Kong, <br />BA(Architectural Studies)</h3>
        <h3 className={styles.showcase3}>
          I am deeply passionate about building products <br />
          through design and technology <br /> and bring true values to people. {}
        </h3>
      </div>
    </div>
  )
}
