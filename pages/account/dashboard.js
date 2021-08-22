import { parseCookies } from '@/helpers/index'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import DashboardProject from '@/components/DashboardProject'
import { API_URL } from '@/config/index'
import styles from '@/styles/Dashboard.module.css'

export default function DashboardPage({ projects, token }) {
  const router = useRouter()
  console.log({ token })
  const deleteProject = async (id) => {
    if (confirm('Are you sure?')) {
      const res = await fetch(`${API_URL}/projects/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json()

      if (!res.ok) {
        toast.error(data.message)
      } else {
        router.reload()
      }
    }
  }

  return (
    <Layout title='User Dashboard'>
      <div className={styles.dash}>
        <h1>Dashboard</h1>
        <h3>My Projects</h3>

        {projects.map((evt) => (
          <DashboardProject key={evt.id} evt={evt} handleDelete={deleteProject} />
        ))}
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  console.log("test")
  console.log({ token })

  const res = await fetch(`${API_URL}/projects/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const projects = await res.json()
  console.log({projects})

  return {
    props: {
      projects,
      token,
    },
  }
}
