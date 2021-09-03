import Link from 'next/link'
import Layout from '@/components/Layout'
import ProjectItem from '@/components/ProjectItem'
import { API_URL } from '@/config/index'
import styles from '@/styles/ProjectItem.module.css'

export default function HomePage({ projects }) {
  var sorted_projects = [];
  var sq_count = 0;
  let project_len = projects.length

  while(sorted_projects.length < project_len){
    sq_count++
    for( var i = 0; i < projects.length; i++){
      if (projects[i].sq_id === sq_count){
          sorted_projects.push(projects[i]);
      }
    }
  }
  console.log("landing sorted_projects len: " + sorted_projects.length)

  projects = sorted_projects.splice(0,3);

  return (
    <Layout>
      <div className={styles.mywork}>
        <p>My Work</p>
      </div>
      {projects.length === 0 && <h3 className={styles.mywork}>Projects showcase coming soon!</h3>}

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
  const res = await fetch(`${API_URL}/projects?_sort=date:ASC&_limit=10`)
  const projects = await res.json()
  console.log(projects)

  return {
    props: { projects },
    revalidate: 1,
  }
}
