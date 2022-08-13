import { useEffect, useState, useRef } from 'react'
import { data } from './data'
import { motion } from 'framer-motion'
import { fade } from '@/components/Variants'

export default function Carousel () {
  const [carousel, setCarousel] = useState(1)
  const timeoutRef = useRef(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCarousel((carousel) =>
            carousel === data.length ? 1 : carousel + 1
        ),
      5000
    )

    return () => {
      resetTimeout();
    }
  }, [carousel])

  return (
    <>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade(2)} id="carousel" className="group relative mx-3 lg:mx-24 mt-7 md:mt-0 lg:mt-6">
        <div className="relative h-56 overflow-hidden rounded-md md:h-80">
          {data.map((d) => (
            <div key={d.id} className={`duration-700 ease-in-out absolute inset-0 transition-all transform ${carousel == d.id ? 'opacity-100' : 'opacity-0'}`}>
              <img loading="lazy" src={d.url} className="absolute block w-full rounded-md -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            </div>
          ))}
        </div>
        <button type="button" className="duration-700 ease-in-out transition-all absolute top-0 left-10 lg:left-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none opacity-0 group-hover:opacity-100 group-hover:left-0 lg:group-hover:-left-10" onClick={() => setCarousel(carousel == 1 ? data.length : carousel-1)}>
          <span className="inline-flex items-center justify-center rounded-md w-10 h-10 bg-white group-hover:scale-110 group-hover:shadow-xl group-focus:outline-none">
            <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="duration-700 ease-in-out transition-all absolute top-0 right-10 lg:right-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none opacity-0 group-hover:opacity-100 group-hover:right-0 lg:group-hover:-right-10" onClick={() => setCarousel(carousel == data.length ? 1 : carousel+1)}>
          <span className="inline-flex items-center justify-center rounded-md w-10 h-10 bg-white group-hover:scale-110 group-hover:shadow-xl group-focus:outline-none">
            <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </motion.div>
    </>
  )
}
