import Layout from '@/layouts/Layout'
import Hero from '@/components/Hero'
import ProductsCards from '@/components/ProductsCards'
import SectionHeading from '@/components/SectionHeading'
export default function Index() {
  return (
    <Layout>
      <main>
        <Hero/>
        <SectionHeading/>
        <ProductsCards/>
        
      </main>
    </Layout>

  )
}
