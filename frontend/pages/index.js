import Layout from '@/components/Layout/Layout'
import Section1 from '@/components/Section1/Section1'
import Section2 from '@/components/Section2/Section2'
import { MOCK_DATA } from '@/config/mock-data'
import LayoutOurServices from '@/components/Layout/LayoutOurServices';
import LayoutOurProjects from '@/components/Layout/LayoutOurProjects';
import LayoutCustomerReview from '@/components/Layout/LayoutCustomerReview';
import BaseService from '@/services/BaseService'

export default function Home({ data }) {
  return (
    <>
    <Layout title="Teifi Digital">
      <Section1 data={data[0]} />
      <Section2 data={data[1]} />
    </Layout>
    <LayoutOurServices data={MOCK_DATA.data[2]}>      
    </LayoutOurServices>
    <LayoutOurProjects data={MOCK_DATA.data[4]}>      
    </LayoutOurProjects>
    <LayoutCustomerReview data={MOCK_DATA.data[5]}>
    </LayoutCustomerReview>
    </>
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