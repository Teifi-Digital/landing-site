import Layout from '@/components/Layout/Layout'
import Section1 from '@/components/Section1/Section1'
import Section2 from '@/components/Section2/Section2'
import { MOCK_DATA } from '@/config/mock-data'
import BaseService from '@/services/BaseService'

export default function Home({ data }) {
  return (
    <Layout title="Teifi Digital">
      <Section1 data={data[0]} />
      <Section2 data={data[1]} />
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