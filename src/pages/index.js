import Headers from '@/components/headers'
import Head from 'next/head'
import Meta from '@/components/Meta'
import Category from '@/components/category'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <Meta />
      </Head>
      <Headers />
      <main>
        <Hero />
        <Category />
      </main>
      <Footer />
    </>
  )
}
