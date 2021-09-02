import styles from '@/styles/Showcase.module.css'

export default function Showcase() {
  return (
    <div>
      <div className={styles.showcase}>
        <h2 className={styles.showcasetext}>Hi! 👋 I&apos;m Nick Gu.<br/> Designer who Codes, with Architectural, Industrial & UI/UX Design background.</h2>
        <img className={styles.showcase1} src='/images/nickgu_image.png' alt='/images/nickgu_image.png' />
      </div>

      <div className={styles.showcase2}>
        <div className={styles.showcase3}>
          <div className={styles.showcase3a}>This site is developed to:</div>
          <div className={styles.showcase3b}><p>1. Display my pass work as a portfolio site </p> <p className={styles.emo_size0}>&nbsp; 🖼️</p></div>
          <div className={styles.showcase3b}><p>2. Strengthen my coding skills as a Fullstack Developer</p> <p className={styles.emo_size0}>&nbsp; 👨‍💻</p></div>
          <div className={styles.showcase3b}><p>3. Connect to like minded people with similar passion‍</p> <p className={styles.emo_size0}>&nbsp;‍ ❤️‍🔥</p></div>
        </div>

        <div className={styles.showcase4}>
          I co-founded Eone Timepiece Inc. in 2012 <br /> when I was still in grad school and we exited in 2020.
          <a href="http://www.eone-time.com" target="_blank" rel="noopener noreferrer">www.eone-time.com  ⏳</a>

        </div>
      </div>

      <div className={styles.showcase2}>
        <div className={styles.showcase3}>
          <div className={styles.showcase3a}>My Education:</div>
          <div className={styles.showcase3c}><p>Harvard Graduate School of Design<br />Master in Architecture (MArchI) <span className={styles.emo_size}>👨🏻‍🎓 </span></p></div>
          <div className={styles.showcase3c}><p>The University of Hong Kong<br />BA(Architectural Studies)<span className={styles.emo_size}>🎓</span></p></div>
        </div>
        <div className={styles.showcase4}>
          I am deeply passionate about building products <br />
          through design ✏️ and technology 💡 <br /> and bring true values 📱 🚗 to people. {}
        </div>
      </div>
    </div>
  )
}
