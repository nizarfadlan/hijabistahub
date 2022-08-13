import { useState } from 'react'
import Category from './category'
import { useToggle } from './context'
import SideNav from './sidenav'

export default function Navbar (props) {
  const [isOpen, setIsOpen] = useState(false)
  const [onSearch, setOnSearch] = useState(false)
  const [onCart, setOnCart] = useState(false)
  const [onCategory, setOnCategory] = useState(false)
  const { open, toggle } = useToggle()

  return (
    <>
      <nav className={`navbar relative bg-white w-full flex justify-between items-center px-3 md:px-8 h-20 transition ease-in-out duration-700 transform origin-top z-10 ${props.css}`}>
        <div className="inline-flex items-center">
          <button aria-label="button-navbar" className={`${open ? 'opened' : ''} rounded-lg md:hidden focus:outline-none focus:shadow-outline transition-all transition-transform ease-linear mr-2`} onClick={toggle}>
            <svg width="35" height="35" viewBox="0 0 100 100">
              <path className="line line1" fill="none" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
              <path className="line line2" d="M 20,50 H 80" />
              <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
          </button>
          <a className="uppercase tracking-[0.15em] text-lg md:text-xl font-montserrat" href="/">
            Hijabista<b>hub</b>
          </a>
          <div className="ml-4 hidden md:block">
            <button className="py-3 px-4 text-gray-600 rounded-md hover:bg-gray-100 hover:text-black text-sm" onClick={() => setOnCategory(!onCategory)}>
              Category
            </button>
          </div>
        </div>
        <div className="relative hidden md:block w-6/12 text-sm">
          <div className="absolute top-0 left-0 pt-3 pl-5 text-gray-500">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <input type="search" className="bg-gray-100 rounded-md border-0 p-3 pl-12 w-full focus:bg-white" placeholder="Search product..." />
        </div>
        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            <div className="block md:hidden flex mr-1 items-center">
              <div className="block relative">
                <button className="inline-block py-3 px-4 rounded-md hover:bg-gray-100 relative" onClick={() => setOnSearch(!onSearch)}>
                  <div className="flex items-center h-5">
                    {onSearch ?
                      <i className="fa-solid fa-xmark"></i>
                    :
                      <i className="fa-solid fa-magnifying-glass"></i>
                    }
                  </div>
                </button>
              </div>
            </div>
            <div className="flex mr-1 items-center">
              <div className="block relative">
                <button className="inline-block py-3 px-4 rounded-md hover:bg-gray-100 relative" onClick={() => setOnCart(!onCart)}>
                  <div className="flex items-center h-5">
                    <i className="fa-solid fa-bag-shopping"></i>
                  </div>
                </button>
              </div>
            </div>
            <div className="block relative hidden md:block" onMouseLeave={() => setIsOpen(false)}>
              <button type="button" className="flex flex-row items-center justify-center px-3 h-10 rounded-md hover:bg-gray-100" onMouseOver={() => setIsOpen(true)}>
                <i className="fa-solid fa-user pl-1"></i>
                <svg fill="currentColor" viewBox="0 0 20 20" className={`${isOpen ? 'rotate-180' : 'rotate-0'} ml-1 w-4 h-4 transition-transform duration-200 transform`}><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
              {isOpen &&
                <div className={`absolute z-50 origin-top pt-2 right-0 md:max-w-screen-sm w-max transition-tranform ease-in-out duration-500 tranform ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-10 invisible'}`}>
                  <div className="px-2 pt-2 pb-2 bg-white rounded-lg shadow-custom text-sm">
                    <div className="flex flex-col">
                      <a className="flex flex-row items-start rounded-md bg-transparent p-2 pr-7 hover:bg-gray-200 mb-1">
                        My Account
                      </a>
                      <hr/>
                      <a className="flex flex-row items-start rounded-md bg-transparent p-2 pr-7 hover:bg-gray-200 mt-1">
                        Login
                      </a>
                      <a className="flex flex-row items-start rounded-md bg-transparent p-2 pr-7 hover:bg-gray-200 ">
                        Register
                      </a>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </nav>
      <div className={`absolute w-full h-screen overflow-hidden backdrop-blur-md backdrop-brightness-50 transition-all ease-in-out duration-500 ${onCart || onSearch || onCategory || open ? 'opacity-100 z-10' : 'opacity-0 invisible'} ${onCategory ? 'hidden md:block' : ''} ${onSearch ? 'block md:hidden' : ''} ${open ? 'block md:hidden' : ''}`}></div>
      <div id="search" className={`absolute origin-top mt-2 right-0 px-3 md:max-w-screen-sm w-full transition-transform ease-in-out duration-500 transform ${onSearch ? 'opacity-100 scale-100 z-50' : 'opacity-0 scale-75 invisible z-0'} md:hidden`}>
        <div className="relative">
          <input type="search" className="border-0 outline-0 p-4 pr-12 w-full rounded-lg bg-white shadow-md text-sm" placeholder="Search product..." />
          <button className="absolute top-0 right-0 pt-3.5 pr-6" onClick={() => setOnSearch(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <div id="cart" className={`absolute origin-top pt-2 right-0 md:max-w-screen-sm w-full transition-transform ease-in-out duration-500 tranform ${onCart ? 'opacity-100 translate-y-0 z-50' : 'opacity-0 translate-y-10 invisible z-0'} mr-0 md:mr-5`}>
        <div className="px-5 py-3 bg-white rounded-lg shadow-custom mx-3 md:mx-0">
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-center mb-2">
              <span className="pl-4 font-semibold">My Shopping Bag</span>
              <button className="bg-transparent py-2 px-4 rounded-md hover:bg-gray-200 ml-auto text-center" onClick={() => setOnCart(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <hr />
            <div className="scroll my-10"></div>
            <div className="flex flex-row items-center justify-between mb-1 font-semibold text-sm uppercase mt-3">
              <div className="pl-4">Total Item <p className="font-normal">0</p></div>
              <div className="pr-4">Subtotal RM <p className="font-normal">0.00</p></div>
            </div>
            <div className="flex flex-col mt-4 text-sm">
              <button className="bg-black text-white rounded-md hover:bg-gray-500 py-3 mb-2 transition-color ease-in-out duration-500">
                Checkout Now
              </button>
              <button className="border border-black bg-white text-black py-3 rounded-md hover:bg-gray-500 hover:text-white hover:border-transparent transition-color ease-in-out duration-500">
                View And Edit Bag
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`absolute mx-1 md:mx-auto max-h-[28em] h-screen overflow-hidden rounded-lg origin-top mt-2 w-full transition-tranform ease-in-out duration-500 tranform ${onCategory ? 'opacity-100 translate-y-0 z-50 hidden md:block' : 'opacity-0 translate-y-10 invisible z-0'}`} onMouseLeave={() => setOnCategory(false)}>
        <div className="relative px-5 py-3 bg-white h-full rounded-lg shadow-custom mx-3 md:mx-5">
          <Category />
        </div>
      </div>
      <SideNav />
    </>
  )
}
