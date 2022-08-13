import Dropdown from "./dropdown"

export default function Header (props) {
  return (
    <>
      <div className={`bg-black text-white p-2 h-12 flex flex-wrap items-center justify-center w-full text-xs transition ease-in-out duration-700 transform origin-top z-50 ${props.display}`}>
        <div className="hidden md:block relative inline-flex pl-4 w-2/6">
          <Dropdown />
        </div>
        <div className="text-center mx-auto w-full md:w-2/6">
          <h2>Welcome to Hijabistahub Online Shop</h2>
        </div>
        <div className="hidden md:block text-right ml-auto pr-4 w-2/6">
          <a href="#" className="mr-2">Dropship Login</a>
          <span className="mr-2">/</span>
          <a href="#">Register</a>
        </div>
      </div>
    </>
  )
}
