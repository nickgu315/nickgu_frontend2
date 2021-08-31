import Link from 'next/link'
import Layout from '@/components/Layout'
import ProjectItem from '@/components/ProjectItem'
import { API_URL } from '@/config/index'
import styles from '@/styles/ProjectItem.module.css'

export default function HomePage({ projects }) {
  return (
    <Layout>
      <div className={styles.mywork}>
        <p>My Work</p>
      </div>
      {projects.length === 0 && <h3>Projects showcase coming soon!</h3>}

        {projects.map((evt) => (
          <ProjectItem key={evt.id} evt={evt} />
        ))}

        <div className={styles.viewmore}>
          {projects.length > 0 && (
            <Link href='/projects'>
              <a className='btn-secondary'>View More</a>
            </Link>
          )}
        </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/projects?_sort=date:ASC&_limit=3`)
  const projects = await res.json()
  console.log(projects)

  return {
    props: { projects },
    revalidate: 1,
  }
}
