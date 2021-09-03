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
import ReactPlayer from 'react-player';

export default function ProjectPage({ evt }) {
  const router = useRouter()


  return (
    <Layout>
      <div className={styles.project}>

        <h3>{evt.name}</h3>


        {evt.nproject && (
          <div className={styles.projectparam}>
            <h4 className={styles.projectparamtext}>Work Nature:</h4>
            <p>{evt.nproject}</p>
          </div>
        )}

        {evt.role && (
          <div className={styles.projectparam}>
            <h4 className={styles.projectparamtext}>Role:</h4>
            <p>{evt.role}</p>
          </div>
        )}

        {evt.team && (
          <div className={styles.projectparam}>
            <h4 className={styles.projectparamtext}>Team:</h4>
            <p>{evt.team}</p>
          </div>
        )}

        {evt.location && (
          <div className={styles.projectparam}>
            <h4 className={styles.projectparamtext}>Location:</h4>
            <p>{evt.location}</p>
          </div>
        )}

        {evt.time && (
          <div className={styles.projectparam}>
            <h4 className={styles.projectparamtext}>Year:</h4>
            <p>{evt.time}</p>
          </div>
        )}

        {evt.description && (
          <div>
            <h4 className={styles.description}>Description:</h4>
            <p className={styles.description2}>{evt.description}</p>
          </div>
        )}

        {evt.video_t1 && (
          <div className={styles.yt_cntainer2}>
            <ReactPlayer className={styles.react_player} url={evt.video_t1}
            playing={true}
            loop={true}
            controls={false}
            width="100%"
            height="55.8%" />
            <div className={styles.yt_mask3}></div>
          </div>
        )}

        <ToastContainer />
        {evt.image && (
          <div className={styles.allimage}>
            {evt.image.map((theimage) => (
              <div className={styles.image1} key={theimage.id}>
                <Image
                  key={theimage.id}
                  src={
                    theimage
                      ? theimage.formats.large.url
                      : '/images/dark_ocean.png'
                  }
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        )}

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
