import { useState } from 'react'

export default function Sort () {
  const [open, setOpen] = useState(false)
  const [sort, setSort] = useState('latest')

  return (
    <>
      <div className="relative text-sm z-10">
        <button className="flex items-center justify-start py-2 text-left bg-transparent" onClick={() => setOpen(!open)}>
          <span className="capitalize">Sort By: {sort}</span>
          <svg fill="currentColor" viewBox="0 0 20 20" className={`${open ? 'rotate-180' : 'rotate-0'} ml-1 w-4 h-4 transition-transform duration-200 transform`}><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <div className={`absolute right-0 w-max origin-top-left pt-1 transition-transform ease-in-out duration-500 transform ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-75 invisible'}`}>
          <div className="px-2 pt-2 pb-2 bg-white rounded-lg shadow-custom text-black">
            <div className="flex flex-col">
              <a className="flex flex-row items-start rounded-md bg-transparent p-2 hover:bg-gray-200" onClick={() => setSort('latest')}>
                Latest
              </a>
              <a className="flex flex-row items-start rounded-md bg-transparent p-2 hover:bg-gray-200 " onClick={() => setSort('oldest')}>
                Oldest
              </a>
              <a className="flex flex-row items-start rounded-md bg-transparent p-2 hover:bg-gray-200 " onClick={() => setSort('lowest price')}>
                Lowest Price
              </a>
              <a className="flex flex-row items-start rounded-md bg-transparent p-2 hover:bg-gray-200 " onClick={() => setSort('highest price')}>
                highest Price
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
