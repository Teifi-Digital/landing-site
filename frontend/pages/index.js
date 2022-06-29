import Layout from '@/components/Layout/Layout'
import { MOCK_DATA } from '@/config/mock-data'
import LayoutOurServices from '@/components/Layout/LayoutOurServices';
import LayoutOurProjects from '@/components/Layout/LayoutOurProjects';
import LayoutCustomerReview from '@/components/Layout/LayoutCustomerReview';
export default function Home() {
  return (
    <>
    <Layout title="Teifi Digital">

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
