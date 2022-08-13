import { data } from '../category/data'
import { useToggle } from './context'
import Link from 'next/link'
import Filter from './filter'
import { motion } from 'framer-motion'
import { fade } from '@/components/Variants'

export default function Sidebar () {
  const { open } = useToggle()

  return (
    <>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade(1)} className={`z-20 h-screen pl-10 w-60 bg-white peer-focus:left-0 peer:transition ease-out-in delay-150 duration-400 ${open ? 'absolute invisible opacity-0 -left-96 md:left-0' : 'absolute md:relative invisible md:visible -left-96 md:left-0'}`}>
        <div className="mt-4 -mx-4 relative h-full overflow-y-auto overflow-x-hidden py-5">
          <span className="px-4 text-gray-500">Collection</span>
          <ul className="space-y-4 mb-4 px-4 mt-8 text-sm">
            {data.map((d, i) => (
              <li key={i}>
                <Link href={`/${d.name.toLowerCase().replace(/ /g, '-')}`}>
                  <a className="flex gap-4 text-gray-600 hover:text-gray-800 transition capitalize">
                    {d.name.toLowerCase()}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <hr />
          <Filter />
        </div>
      </motion.div>
    </>
  )
}
