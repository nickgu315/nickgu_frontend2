import qs from 'qs'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '@/components/Layout'
import ProjectItem from '@/components/ProjectItem'
import { API_URL } from '@/config/index'

export default function SearchPage({ projects }) {
  const router = useRouter()

  return (
    <Layout title='Search Results'>
      <Link href='/projects'>Go Back</Link>
      <h1>Search Results for {router.query.term}</h1>
      {projects.length === 0 && <h3>No projects to show</h3>}

      {projects.map((evt) => (
        <ProjectItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  )
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  })

  const res = await fetch(`${API_URL}/projects?${query}`)
  const projects = await res.json()

  return {
    props: { projects },
  }
}
