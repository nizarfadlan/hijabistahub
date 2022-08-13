import Header from './header'
import Navbar from './navbar'
import { useEffect, useState } from 'react'
import NavbarProvider from './context'
import { motion } from 'framer-motion'
import { fadeIn } from '@/components/Variants'

export default function Headers () {
  const [sticky, setSticky] = useState(false)

  const stickNavbar = () => {
    if (window !== undefined) {
      var windowHeight = window.scrollY
      var elementBottom = document.querySelector('.headers').offsetTop + 15
      windowHeight >= elementBottom ? setSticky(true) : setSticky(false)

      if (window.scrollY == 0) setSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar)

    return () => {
      window.removeEventListener('scroll', stickNavbar)
    }
  }, [])

  return (
    <>
      <NavbarProvider>
        <motion.div variants={fadeIn('down', 0.3)} initial="initial" animate="animate" className="headers fixed w-full z-40 transition-all duration-500 ease-in-out top-0">
          <Header display={sticky ? 'absolute opacity-0 invisible -translate-y-10' : 'relative opacity-100 translate-y-0'} />
          <Navbar css={sticky ? 'shadow-md' : ''}/>
        </motion.div>
      </NavbarProvider>
    </>
  )
}
