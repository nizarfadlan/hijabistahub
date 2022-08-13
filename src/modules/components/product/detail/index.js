import { motion } from 'framer-motion'
import { fadeInHidden } from '@/components/Variants'

export default function DetailProduct() {
  return (
    <>
      <div className="2xl:container 2xl:mx-auto lg:px-20 md:px-6 px-4 mb-20">
        <div id="viewerBox" className="md:p-6 p-4 bg-white">
          <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-strech justify-center lg:space-x-8">
            <div className="lg:w-1/2 flex justify-between items-strech bg-gray-50 px-2 py-20 md:py-6 md:px-6 lg:py-12">
              <div className="flex items-center">
                <button aria-label="slide back" className="focus:outline-none focus:ring-2 focus:ring-black hover:bg-black hover:text-white">
                  <svg fill="currentColor" viewBox="0 0 20 20" className="rotate-90 w-10 h-10 lg:w-16 lg:h-16"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </div>
              <div className="slider">
                <div className="slide-ana lg:relative">
                  <div className="flex">
                    <motion.img layoutId="exampleLayout" loading="lazy" src="https://www.hijabistahub.com/scripts/timthumb.php?src=https://www.hijabistahub.com//site_media/img/IMG-4410_20190506165704.JPG&w=500&zc=1" alt="A black chair with wooden legs" className="w-full h-full" />
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button aria-label="slide forward" className="focus:outline-none focus:ring-2 focus:ring-black hover:bg-black hover:text-white">
                  <svg fill="currentColor" viewBox="0 0 20 20" className="-rotate-90 w-10 h-10 lg:w-16 lg:h-16"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
              <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('', 1)} className="text-3xl lg:text-4xl font-semibold">Yusuf Baju</motion.h1>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('', 1, 0.2)} className="inline-flex items-center mt-2 font-montserrat">
                <p className="mr-2 text-2xl font-semibold text-red-600">RM 99.00</p>
                <p className="text-xl line-through">RM 189.00</p>
              </motion.div>
              <div className="mt-6">
                <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('', 1, 0.3)} className="font-bold">Choose Size</motion.p>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('', 1, 0.4)} className="inline-flex text-sm mt-2">
                  <button className="bg-gray-300 px-5 py-1 mx-1 rounded-md hover:bg-black hover:text-white">XL</button>
                  <button className="bg-gray-300 px-5 py-1 mx-1 rounded-md hover:bg-black hover:text-white">L</button>
                  <button className="bg-gray-300 px-5 py-1 mx-1 rounded-md hover:bg-black hover:text-white">M</button>
                  <button className="bg-gray-300 px-5 py-1 mx-1 rounded-md hover:bg-black hover:text-white">S</button>
                </motion.div>
              </div>
              <div className="mt-6">
                <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('', 1, 0.5)} className="font-bold">Choose Colour</motion.p>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('', 1, 0.6)} className="inline-flex text-sm mt-2">
                  <button className="bg-black p-4 mx-2 rounded-full"></button>
                  <button className="bg-red-600 p-4 mx-2 rounded-full"></button>
                  <button className="bg-blue-600 p-4 mx-2 rounded-full"></button>
                  <button className="bg-green-600 p-4 mx-2 rounded-full"></button>
                </motion.div>
              </div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('', 1, 0.7)} className="flex items-center flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 lg:space-x-8 mt-16">
                <button className="flex flex-row items-center justify-center  w-full md:w-2/12 text-xl md:text-2xl hover:text-red-600 trasition ease-in duration-200">
                  <i className="fa-solid fa-heart"></i>
                  <span className="inline-block ml-2 md:hidden text-sm font-semibold">Add to Wishlist</span>
                </button>
                <button className="w-full md:w-10/12 bg-black text-white py-4 rounded-md">Add to Cart</button>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInHidden('', 1, 0.2)} className="bg-white mt-2 md:mt-5 lg:mt-10">
          <div className="flex justify-center border-b border-gray-400 mb-4">
            <ul className="flex flex-wrap">
              <li className="mr-2">
                <button className="inline-block hover:border-black rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2" type="button" role="tab">Description</button>
              </li>
              <li className="mr-2">
                <button className="inline-block hover:border-black rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2" type="button" role="tab">Size Chart</button>
              </li>
              <li className="mr-2">
                <button className="inline-block hover:border-black rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2" type="button" role="tab">Size Guide</button>
              </li>
              <li>
                <button className="inline-block hover:border-black rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2" type="button" role="tab">Shipping Details</button>
              </li>
            </ul>
          </div>
          <div className="mx-2 md:mx-5 px-0 md:px-20">
            <div className="p-4 hidden">
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores distinctio et nam dolor excepturi vero qui numquam, id dolorum doloremque placeat, quas aut fugiat, illo accusamus architecto nesciunt adipisci ad!
              </p>
            </div>
            <div className="p-4">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis sed esse labore nulla ullam molestias quae recusandae, ut velit quidem officia earum, et, atque praesentium! Accusamus nam ea tempore.
              </p>
            </div>
            <div className="p-4 hidden">
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis esse, quia corrupti vero, cumque ratione consequatur hic itaque error officia nihil delectus quis labore, praesentium eligendi iure tempore voluptates. Quidem!
              </p>
            </div>
            <div className="p-4 hidden">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eaque, vero sed, assumenda consectetur quos, rem reprehenderit iusto molestias adipisci labore corporis. Aspernatur voluptatem fugit repellat vero sunt labore saepe.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
