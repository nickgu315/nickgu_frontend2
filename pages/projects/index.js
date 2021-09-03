import Layout from '@/components/Layout'
import ProjectItem from '@/components/ProjectItem'
import Pagination from '@/components/Pagination'
import { API_URL, PER_PAGE } from '@/config/index'

export default function ProjectsPage({ projects, page, total }) {

  return (
    <Layout>
      <h2>Work showcase</h2>
      {projects.length === 0 && <h3>Coming Soon...</h3>}

      {projects.map((evt) => (
        <ProjectItem key={evt.id} evt={evt} />
      ))}

      <Pagination page={page} total={total} />
    </Layout>
  )
}

export async function getServerSideProps({ query: { page = 1 } }) {
  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/projects/count`)
  const total = await totalRes.json()

  // Fetch projects
  const projectRes = await fetch(
    `${API_URL}/projects?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  )
  let projects = await projectRes.json()

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
  console.log("work page sorted_projects len: " + sorted_projects.length)
  projects = sorted_projects.splice(0,6)

  return {
    props: { projects, page: +page, total },
  }
}
