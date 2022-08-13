import Headers from '@/components/headers'
import Head from 'next/head'
import Meta from '@/components/Meta'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'
import Breadcrumb from '@/components/Breadcrumb'
import DetailProduct from '@/components/product/detail'

export default function Product() {
  const { asPath } = useRouter()

  return (
    <>
      <Head>
        <Meta />
      </Head>
      <Headers />
      <main>
        <Breadcrumb url={asPath} />
        <DetailProduct />
      </main>
      <Footer />
    </>
  )
}
