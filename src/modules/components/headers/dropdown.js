import { useState } from 'react'

export default function Dropdown ({ color = 'white', origin = 'left' }) {
  const [open, setOpen] = useState(false)
  const [curreny, setCurreny] = useState('MYR')

  return (
    <>
      <div className="relative cursor-pointer" onMouseLeave={() => setOpen(false)}>
        <button className={`flex text-${color} items-center justify-start py-2 text-left bg-transparent`} onMouseOver={() => setOpen(true)}>
          <span>{curreny}</span>
          <svg fill="currentColor" viewBox="0 0 20 20" className={`${open ? 'rotate-180' : 'rotate-0'} ml-1 w-4 h-4 transition-transform duration-200 transform`}><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <div className={`absolute w-4/12 origin-top-${origin} pt-1 transition-transform ease-in-out duration-500 transform ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-75 invisible'}`}>
          <div className="px-2 pt-2 pb-2 w-full bg-white rounded-lg shadow-custom text-black">
            <div className="flex flex-col">
              <a className="flex flex-row items-start rounded-md bg-transparent p-2 hover:bg-gray-200" onClick={() => setCurreny('MYR')}>
                MYR
              </a>
              <a className="flex flex-row items-start rounded-md bg-transparent p-2 hover:bg-gray-200 " onClick={() => setCurreny('SGD')}>
                SGD
              </a>
              <a className="flex flex-row items-start rounded-md bg-transparent p-2 hover:bg-gray-200 " onClick={() => setCurreny('IDR')}>
                IDR
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
