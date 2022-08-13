import { data } from './data'
import Link from 'next/link'

export default function Category () {
  return (
    <>
      <div className="flex overflow-y-auto py-2 h-full">
        <div className="z-20 relative top-0 -left-96 md:left-0 h-screen pl-10 w-72 bg-white peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="mt-4 -mx-4 relative h-full overflow-y-auto overflow-x-hidden">
            <span className="px-4">Collection</span>
            <ul className="space-y-3 mb-12 px-4 mt-5 text-sm">
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
          </div>
        </div>
        <div className="top-0 mx-7 md:mx-10 my-16 grid grid-cols-1 gap-10 mt-8 md:grid-cols-2 lg:grid-cols-3 items-stretch pl-10">
          <div>
            <p className="font-medium">
              Inaya Series
            </p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-600">
              <a className="hover:text-black" href="#"> Lorem ipsum dolor sit amet consectetur. </a>
              <a className="hover:text-black" href="#"> Lorem ipsum dolor sit amet consectetur. </a>
              <a className="hover:text-black" href="#"> Lorem ipsum dolor sit amet consectetur. </a>
            </nav>
          </div>
          <div>
            <p className="font-medium">
              Faith Series
            </p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-600">
              <a className="hover:text-black" href="#"> Lorem ipsum dolor sit amet consectetur. </a>
              <a className="hover:text-black" href="#"> Lorem ipsum dolor sit amet consectetur. </a>
              <a className="hover:text-black" href="#"> Lorem ipsum dolor sit amet consectetur. </a>
              <a className="hover:text-black" href="#"> Lorem ipsum dolor sit amet consectetur. </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
