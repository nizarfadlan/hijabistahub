import { motion } from 'framer-motion'
import { fadeInSideHidden, fadeInHidden, bounceLeft } from '@/components/Variants'

export default function Hero () {
  return (
    <>
      <div id="hero" className="hero pt-4 lg:pt-8 pb-8 mx-4 md:mx-0">
        <div className="container px-4 pt-14 lg:pt-12 xl:pt-3 sm:px-6 lg:px-14 xl:px-18 mx-auto">
          <div className="hero-wrapper grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12  items-center">
            <div className="hero-image col-span-4">
              <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInSideHidden('', 1, 0.2)} alt="Hero Image" src="/hero.png" className="pt-10 mx-auto md:-ml-10" />
            </div>
            <div className="hero-text col-span-4 pr-3 lg:pr-6 ml-0 md:-ml-10">
              <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('', 1)} className="text-2xl text-gray-900 font-montserrat">New Arrival</motion.h1>
              <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('', 1, 0.2)} className="font-bold text-3xl md:text-4xl lg:text-5xl max-w-xl text-gray-900 capitalize">Everyone can look fashionable*</motion.h1>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('', 1, 0.3)} className="mt-4 text-gray-600">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates ut commodi maxime quae aliquam sapiente hic sint, rerum voluptatem cupiditate cumque similique porro eum, labore molestiae dolores delectus debitis!"</motion.p>
              <div className="flex space-x-5 mt-10 justify-start">
                <motion.button initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('', 1, 0.4)} className="group inline-flex items-center space-x-2">
                  <p className="text-sm font-semibold mr-1 px-2">View all collection</p>
                  <motion.div initial="initial" animate="animate" variants={bounceLeft(2)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 -rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>
                </motion.button>
              </div>
            </div>
            <div className="hero-shop col-span-4 md:col-span-12 lg:col-span-4 grid grid-cols-3 lg:grid-cols-2 pt-5 md:pt-10 mt-4 lg:mt-0">
              <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInSideHidden('right', 1, 0.2)} loading="lazy" alt="Hero Image" src="/hero1.jpg" className="pt-4 px-2 mx-auto col-span-1" />
              <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInSideHidden('right', 1)} loading="lazy" alt="Hero Image" src="/hero2.jpg" className="pt-4 px-2 mx-auto col-span-1" />
              <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('down', 1, 0.3)} loading="lazy" alt="Hero Image" src="/hero3.jpg" className="pt-4 px-2 mx-auto col-span-1" />
              <div className="flex flex-col items-start justify-start lg:justify-between p-2 px-4 mt-6 lg:mt-4 col-span-12 lg:col-span-1">
                <div className="hero-text">
                  <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('down', 1)} className="font-bold lg:text-lg text-2xl">Abaya Series</motion.p>
                  <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('down', 1, 0.2)} className="lg:text-sm text-lg pt-1 ">Raudhah Abaya</motion.p>
                  <ul className="mt-4 lg:text-xs text-sm text-gray-400">
                    <motion.li initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('down', 1, 0.3)}>Material Premium Polyester with beads</motion.li>
                    <motion.li initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('down', 1, 0.4)}>Attachment Cardigan with Sash</motion.li>
                    <motion.li initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('down', 1, 0.5)}>One set with a shawl</motion.li>
                  </ul>
                </div>
                <motion.button initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('down', 1, 0.7)} className="bg-black rounded-md text-white px-4 py-2 text-sm lg:mt-0 mt-10">
                  Buy Now
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
