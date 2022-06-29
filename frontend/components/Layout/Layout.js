import Head from 'next/head'
import styles from './Layout.module.scss'

function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <div className={styles.container}>
          {children}
        </div>
      </Head>

    </div>
  )
}

export default Layout
