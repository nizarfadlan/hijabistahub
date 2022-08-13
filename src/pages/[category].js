import Headers from '@/components/headers'
import Head from 'next/head'
import Meta from '@/components/Meta'
import Footer from '@/components/Footer'
import Product from '@/components/product'
import Carousel from '@/components/carousel'

export default function Category() {

  return (
    <>
      <Head>
        <Meta />
      </Head>
      <Headers />
      <main className="mt-12 md:mt-24 mb-8 pt-8 md:pt-14">
        <Carousel />
        <Product />
      </main>
      <Footer />
    </>
  )
}
