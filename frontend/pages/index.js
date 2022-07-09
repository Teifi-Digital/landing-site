import BaseService from '@/services/base'
import { ToastContainer } from 'react-toastify'
import Layout from '@/components/Layout/Layout'
import Section1 from '@/components/Section1/Section1'
import Section2 from '@/components/Section2/Section2'
import Section3 from '@/components/Section3/Section3'
import Section7 from '@/components/Section7/Section7'
import Section8 from '@/components/Section8/Section8'
import Section9 from '@/components/Section9/Section9'
import LayoutOurProjects from '@/components/Layout/LayoutOurProjects';
import LayoutOurAchievements from '@/components/Layout/LayoutOurAchievements';
import LayoutCustomerReview from '@/components/Layout/LayoutCustomerReview';

export default function Home({ data }) {
  return (
    <Layout title={'Teifi Site'}>
      <div className='home-container'>
        <Section1 data={data[0]} />
        <Section2 data={data[1]} />
        <Section3 data={data[2]} />
        <LayoutOurAchievements data={data[3]} />
        <LayoutOurProjects data={data[4]} />
        <LayoutCustomerReview data={data[5]} />
        <Section7 data={data[6]} />
        <Section8 data={data[7]} />
        <Section9 data={data[8]} />
        <ToastContainer position='bottom-center' />
      </div>
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