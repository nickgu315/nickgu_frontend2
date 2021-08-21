import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { useContext } from 'react'
import Link from 'next/link'
import Search from './Search'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/Header.module.css'

export default function Header() {
  const { user, logout } = useContext(AuthContext)

  return (
    <header>
      <nav className={styles.header}>
          <div className={styles.topbarleftlogo}>
            <a href="/"> <img src="/images/logo-512x512.png" alt="" />
            </a>
          </div>

          <div className={styles.topbarleftsearch}>
            <Search />
          </div>

          <div className={styles.box2}>

            <div>
              <Link href='/learnmore'>
                <a>Learn more about what I am doing</a>
              </Link>
            </div>

            <div>
              <Link href='/projects'>
                <a>My Projects</a>
              </Link>
            </div>

            <div>
              <Link href='/projects'>
                <a>News</a>
              </Link>
            </div>

            <div>
              <Link href='/projects'>
                <a>Collaboration</a>
              </Link>
            </div>


            <div>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </div>

            {user ? (
              // If logged in (/projects/add)
              <>
                <div>
                  <Link href='/account/dashboard'>
                    <a>Create Project</a>
                  </Link>
                </div>
                <div>
                  <Link href='/account/dashboard'>
                    <a>Dashboard</a>
                  </Link>
                </div>
              </>
            ) : (
              // If logged out
              <>
              </>
            )}
          </div>

          <div className={styles.loginbtn}>
            {user ? (
              // If logged in
              <>
                <div>
                  <button
                    onClick={() => logout()}
                    className='btn-secondary btn-icon'
                  >
                    <FaSignOutAlt /> Sign out
                  </button>
                </div>
              </>
            ) : (
              // If logged out
              <>
                <div>
                  <Link href='/account/login'>
                    <a className='btn-secondary btn-icon'>
                      <FaSignInAlt /> Sign in
                    </a>
                  </Link>
                </div>
              </>
            )}
          </div>
      </nav>
    </header>
  )
}
