import { data } from './data'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInSideHidden, fadeInHidden, fade } from '@/components/Variants'

export default function Category () {
  const [category, setCategory] = useState(0)

  return (
    <>
      <section id="category" className="pt-4 lg:pt-0 pb-10 mx-4 md:mx-0">
        <div className="container pt-20 px-4 sm:px-6 lg:px-16 xl:px-18 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="col-span-6 z-10">
              <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInSideHidden('', 1)} className="font-bold text-3xl md:text-4xl lg:text-5xl max-w-xl text-gray-900 capitalize">{data[category].name}</motion.h1>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInSideHidden('', 1, 0.2)} className="text-gray-800 text-base leading-relaxed mt-7 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit assumenda repudiandae consequatur culpa inventore accusamus harum hic facilis autem, earum tenetur, possimus ab animi placeat quis. Quia, assumenda facilis!</motion.p>
              <div className="flex space-x-5 mt-10 justify-center md:justify-start">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('', 1, 0.2)} className="inline-flex items-center space-x-2">
                  <button className="border-2 p-2 rounded-md hover:bg-black hover:text-white hover:border-transparent transition-color ease-in-out duration-500 mr-2 disabled:text-gray-600 disabled:hover:bg-transparent disabled:hover:text-gray-600 disabled:hover:border-inherit disabled:cursor-not-allowed" onClick={() => setCategory(category-1)} disabled={category == 0}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                  <button className="border-2 p-2 rounded-md hover:bg-black hover:text-white hover:border-transparent transition-color ease-in-out duration-500 ml-2 disabled:text-gray-600 disabled:hover:bg-transparent disabled:hover:text-gray-600 disabled:hover:border-inherit disabled:cursor-not-allowed" onClick={() => setCategory(category+1)} disabled={category == data.length-1}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </div>
            <div className="col-span-6 pb-5 md:pb-36 pt-10 lg:pt-0 relative flex justify-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade(2)} className="inline-flex justify-center">
                {category != 0 && <img alt={data[category].name} src={data[category-1].image} loading="lazy" className="absolute w-80 pt-10 mx-auto transition-tranform ease-in-out duration-500 tranform opacity-40 brightness-90 scale-75 -translate-x-44 hidden md:block" />}
                <figure className="card-cetegory w-96 mx-auto z-10 transition-tranform ease-in-out duration-500 tranform translate-x-0">
                  <img loading="lazy" alt={data[category].name} src={data[category].image} />
                  <figcaption className="flex flex-col items-center">
                    <h1 className="my-auto text-white font-bold uppercase text-3xl tracking-widest">{data[category].name}</h1>
                    <a href={`/${data[category].name.toLowerCase().replace(/ /g, '-')}`} className="mb-10 py-3 px-6 rounded-md bg-gray-200 text-black font-semibold text-sm transition-color ease-in-out duration-500 hover:bg-white">Shop Now</a>
                  </figcaption>
                </figure>
                {category != data.length-1 && <img alt={data[category].name} src={data[category+1].image} loading="lazy" className="absolute w-80 pt-10 mx-auto transition-tranform ease-in-out duration-500 tranform opacity-40 brightness-90 scale-75 translate-x-44 hidden md:block" />}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
