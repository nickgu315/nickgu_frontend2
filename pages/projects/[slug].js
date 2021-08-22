import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import ProjectMap from '@/components/ProjectMap'
import { API_URL } from '@/config/index'
import styles from '@/styles/Project.module.css'
import { useRouter } from 'next/router'

export default function ProjectPage({ evt }) {
  const router = useRouter()

  return (
    <Layout>
      <div className={styles.project}>

        <h1>{evt.name}</h1>

        <h3>Nature:</h3>
        <p>{evt.nproject}</p>
        <h3>Role:</h3>
        <p>{evt.role}</p>

        {evt.team && (
          <div>
            <h4>Team:</h4>
            <p>{evt.team}</p>
          </div>
        )}

        <h4>Location:</h4>
        <p>{evt.location}</p>

        {evt.time && (
          <div>
            <h4>Year:</h4>
            <p>{evt.time}</p>
          </div>
        )}

        <h4>Description:</h4>
        <p>{evt.description}</p>

        <ToastContainer />
        {evt.image && (
          <div className={styles.image}>
            <Image
              src={evt.image.formats.medium.url}
              width={960}
              height={600}
            />
          </div>
        )}

        <ProjectMap evt={evt} />

        <Link href='/projects'>
          <a className={styles.back}>{'<'} Go Back</a>
        </Link>
      </div>
    </Layout>
  )
}

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/projects`)
//   const projects = await res.json()

//   const paths = projects.map((evt) => ({
//     params: { slug: evt.slug },
//   }))

//   return {
//     paths,
//     fallback: true,
//   }
// }

// export async function getStaticProps({ params: { slug } }) {
//   const res = await fetch(`${API_URL}/projects?slug=${slug}`)
//   const projects = await res.json()

//   return {
//     props: {
//       evt: projects[0],
//     },
//     revalidate: 1,
//   }
// }

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/projects?slug=${slug}`)
  const projects = await res.json()

  return {
    props: {
      evt: projects[0],
    },
  }
}
