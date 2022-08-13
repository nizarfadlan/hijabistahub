import Sort from './sort'
import { useRouter } from 'next/router'
import { useToggle } from './context'
import { motion } from 'framer-motion'
import { fadeInSideHidden } from '@/components/Variants'

export default function Header () {
  const { asPath } = useRouter()
  const { toggle } = useToggle()
  const name = asPath.split('/').filter(i => i)[0].replace(/-/g, ' ')

  return (
    <>
      <div className="relative flex flex-wrap items-center mx-auto md:mx-10 mb-10 mt-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInSideHidden('', 1)} className="w-full md:w-6/12 flex flex-row justify-center md:justify-start px-8 md:px-0 relative">
          <h1 className="uppercase font-bold text-2xl md:text-3xl tracking-widest">{name}</h1>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInSideHidden('right', 1)} className="w-full md:w-6/12 relative flex justify-center md:justify-end mt-10 md:mt-0 px-4 text-sm">
          <button type="button" className="mr-auto md:mr-4 px-6 py-2 border border-black rounded-md hover:border-transparent hover:bg-black hover:text-white transition duration-500 ease-in" aria-label="Toggle Filter" aria-expanded="false" onClick={toggle}>Filter</button>
          <Sort />
        </motion.div>
      </div>
    </>
  )
}
