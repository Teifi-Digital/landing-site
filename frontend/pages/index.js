import Layout from '@/components/Layout/Layout'
import Section1 from '@/components/Section1/Section1'
import { MOCK_DATA } from '@/config/mock-data'

export default function Home() {
  return (
    <Layout title="Teifi Digital">
      <Section1 data={MOCK_DATA.data[0]} />
    </Layout>
  )
}
