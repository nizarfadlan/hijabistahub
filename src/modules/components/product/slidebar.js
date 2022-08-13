import { useToggle } from './context'
import Filter from './filter'

export default function Slidebar () {
  const { open, toggle } = useToggle()

  return (
    <>
      <div className={`fixed z-50 left-0 h-screen w-screen w-60 bg-white peer-focus:top-0 peer:transition ease-in duration-200 ${open ? 'top-0' : 'top-full'}`}>
        <div className="flex flex-col px-10 py-8">
          <div className="flex flex-row items-center justify-center mb-2">
            <span className="pl-4 text-xl font-semibold">Filter</span>
            <button className="bg-transparent py-2 px-4 rounded-md hover:bg-gray-200 ml-auto text-center" onClick={toggle}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="-mx-4 relative overflow-y-auto overflow-x-hidden">
            <Filter />
          </div>
        </div>
      </div>
    </>
  )
}
