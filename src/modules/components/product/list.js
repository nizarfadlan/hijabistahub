import Card from './card'
import { data } from './data'
import { motion } from 'framer-motion'
import { fadeInHidden } from '@/components/Variants'

export default function List () {
  return (
    <>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('', 1, 0.2)} className="top-0 mx-7 md:mx-10 my-16 grid grid-cols-1 gap-10 mt-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {data.map((d, i) => (
          <Card key={i} data={d} />
        ))}
      </motion.div>
    </>
  )
}
