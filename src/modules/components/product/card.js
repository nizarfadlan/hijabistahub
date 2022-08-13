import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Card (props) {
  const { asPath } = useRouter()
  const name = asPath.split('/').filter(i => i)[0].replace(/-/g, ' ')
  const data = props.data

  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full max-w-md mx-auto mt-3 md:mt-0">
        <div className="w-56 md:w-72">
          <Link href={`${asPath}/${data.name.toLowerCase().replace(/ /g, '-')}`}>
            <a className="relative">
              <motion.img layoutId="exampleLayout" loading="lazy" className="object-cover w-56 md:w-72" src={data.image} alt={data.name} />
              {data.promo != 0 && <div className="badge absolute top-0 left-0 bg-red-500 text-white p-1 px-3 text-sm uppercase">{Math.ceil((data.price/data.promo)*10)}% OFF</div>}
            </a>
          </Link>
        </div>
        <Link href={`${asPath}/${data.name.toLowerCase().replace(/ /g, '-')}`}>
          <a className="mt-3 text-lg font-medium">
            {data.name}
          </a>
        </Link>
        <p className="text-gray-500 text-[14px]">{name}</p>
        <p className="text-gray-500 mt-1 text-[14px]">{data.motif.length} Colours</p>
        <div className="flex flex-col items-center my-4">
          {data.promo != 0 && <p className="mr-1 text-red-500 font-semibold">RM 99.00</p>}
          <p className={`${data.promo != 0 ? 'text-sm line-through' : ''}`}>RM {data.price}.00</p>
        </div>
        <div className="inline-flex flex-wrap text-sm self-center mt-auto">
          <span className="mx-3">XL</span>
          <span className="mx-3">L</span>
          <span className="mx-3">M</span>
          <span className="mx-3">S</span>
        </div>
      </div>
    </>
  )
}
