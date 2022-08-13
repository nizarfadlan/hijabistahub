import Dropdown from './dropdown'
import { data } from './category/data'
import { useToggle } from './context'
import { useState } from 'react'

export default function SideNav () {
  const [onOpenSubNav, setOpenSubNav] = useState(-1)
  const { open } = useToggle()

  return (
    <>
      <div className={`z-20 origin-left h-screen w-8/12 overflow-hidden peer-focus:left-0 peer:transition ease-out-in delay-150 duration-400 ${open ? 'absolute visible md:invisible left-0' : 'absolute invisible opacity-0 -left-96'}`}>
        <div className="relative py-2 h-full bg-white overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col py-3 px-6">
            <div className="px-2 top-0 text-sm mb-2">
              <Dropdown color="black" origin="right" />
            </div>
            <div className="mt-2 mb-3">
              {data.map((d, i) => (
                <div key={i} className="mb-1 flex flex-col">
                  <button className="flex w-full items-center justify-between cursor-pointer transition duration-300 ease-in-out hover:bg-black hover:text-white rounded-md px-2 py-3" onClick={() => setOpenSubNav(onOpenSubNav == i ? -1 : i)}>
                    <span className={`${onOpenSubNav == i ? 'font-bold' : 'font-base'}`}>{d.name}</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" className={`${onOpenSubNav == i ? 'rotate-180' : 'rotate-0'} w-4 h-4 transition-transform duration-200 transform`}><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
                  <ul className={`ml-5 mt-1 w-full border-l border-black pl-6 text-sm ${onOpenSubNav == i ? 'block' : 'hidden'}`}>
                    <li className="mt-3 mb-3 text-gray-700 transition duration-300 ease-in-out hover:text-black">
                      <a href="#">Lorem ipsum dolor</a>
                    </li>
                    <li className="mt-3 mb-3 text-gray-700 transition duration-300 ease-in-out hover:text-black">
                      <a href="#">Lorem ipsum dolor</a>
                    </li>
                    <li className="mt-3 mb-3 text-gray-700 transition duration-300 ease-in-out hover:text-black">
                      <a href="#" className="flex items-center">Lorem ipsum dolor</a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-2 mb-4">
              <span className="font-semibold">Dropship : </span>
              <div className="inline-flex ml-2">
                <a href="#" className="mr-3 underline">Login</a>
                <span>/</span>
                <a href="#" className="ml-3 underline">Register</a>
              </div>
            </div>
            <hr />
            <a href="#" className="text-center mt-4 py-2 px-5 rounded-md bg-black text-white hover:bg-gray-800">Login</a>
            <a href="#" className="text-center mt-2 py-2 px-5 rounded-md border border-black hover:bg-gray-800 hover:border-transparent hover:text-white">Register</a>
          </div>
        </div>
      </div>
    </>
  )
}
