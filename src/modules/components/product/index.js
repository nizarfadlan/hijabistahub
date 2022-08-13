import Header from './header'
import List from './list'
import Sidebar from './sidebar'
import SidebarProvider from './context'
import Slidebar from './slidebar'
import { useEffect, useState } from 'react'

export default function Product () {
  const [barMobile, setBarMobile] = useState(null)

  const changeBar = () => {
    setBarMobile(window.innerWidth <= 750)
  }

  useEffect(() => {
    setBarMobile(window.innerWidth <= 750)
    window.addEventListener('resize', changeBar);

    return () => {
      window.removeEventListener('resize', changeBar);
    }
  }, [])
  return (
    <>
      <SidebarProvider>
        <div className="product pt-0 md:pt-5">
          <Header />
          <div className="block md:flex">
            {barMobile ?
              <Slidebar />
            :
              <Sidebar />
            }
            <List />
          </div>
        </div>
      </SidebarProvider>
    </>
  )
}
