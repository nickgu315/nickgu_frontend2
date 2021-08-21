import Layout from '@/components/Layout'
import ProjectItem from '@/components/ProjectItem'
import Pagination from '@/components/Pagination'
import { API_URL, PER_PAGE } from '@/config/index'

export default function ProjectsPage({ projects, page, total }) {
  return (
    <Layout>
      <h1>Projects showcase</h1>
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
  const projects = await projectRes.json()

  return {
    props: { projects, page: +page, total },
  }
}
