import Head from 'next/head'
import styles from './Layout.module.scss'

function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}

export default Layout
