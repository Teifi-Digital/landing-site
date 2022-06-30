import Layout from '@/components/Layout/Layout'
import Section1 from '@/components/Section1/Section1'
import Section2 from '@/components/Section2/Section2'
import Section7 from '@/components/Section7/Section7'
import Section8 from '@/components/Section8/Section8'
import BaseService from '@/services/base'
import { ToastContainer } from 'react-toastify'

export default function Home({ data }) {
  return (
    <Layout title="Teifi Digital">
      <ToastContainer />
      <ToastContainer />
      <Section1 data={data[0]} />
      <Section2 data={data[1]} />
      <Section7 data={data[6]} />
      <Section8 data={data[7]} />
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const res = await BaseService.fetch('/management/pages/teifi-site')
  const data = res.data

  return {
    props: {
      data
    },
  }
}