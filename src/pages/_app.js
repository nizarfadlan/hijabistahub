import '@/styles/globals.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Router from 'next/router'

NProgress.configure({ showSpinner: false })
NProgress.configure({ ease: 'ease', speed: 500 })
NProgress.configure({ trickleSpeed: 800 })

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps, router }) {
  return <Component key={router.route} {...pageProps} />
}

export default MyApp
