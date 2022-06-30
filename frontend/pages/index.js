import Layout from '@/components/Layout/Layout'
import Section1 from '@/components/Section1/Section1'
import Section2 from '@/components/Section2/Section2'
import LayoutOurServices from '@/components/Layout/LayoutOurServices';
import LayoutOurProjects from '@/components/Layout/LayoutOurProjects';
import LayoutOurAchievements from '@/components/Layout/LayoutOurAchievements';
import LayoutCustomerReview from '@/components/Layout/LayoutCustomerReview';
import BaseService from '@/services/BaseService'

export default function Home({ data }) {
  return (
    <>
    <Layout title="Teifi Digital">
      <Section1 data={data[0]} />
      <Section2 data={data[1]} />
      <LayoutOurServices data={data[2]} />
      <LayoutOurAchievements data={data[3]} />
      <LayoutOurProjects data={data[4]} />
      <LayoutCustomerReview data={data[5]} />
    </Layout>       
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