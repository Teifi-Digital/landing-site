import Head from 'next/head'

function Layout({ title, children }) {
  return (
    <div className='layout-container'>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
        />
        <title>Teifi Digital</title>
      </Head>
      {children}
    </div>
  )
}

export default Layout
