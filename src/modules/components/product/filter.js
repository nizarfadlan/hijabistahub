export default function Filter () {
  return (
    <>
      <div className="mt-4 mb-3">
        <span className="px-4 text-gray-500">Size</span>
        <div className="flex items-center ml-4 mt-3">
          <label id="custom-checkbox" htmlFor="radio1" className="cursor-pointer">
            <input id="radio1" type="radio" name="radio" className="hidden" />
            <span className="checkbox"></span>
          </label>
          <span className="ml-4 mt-2">XL</span>
        </div>
        <div className="flex items-center ml-4">
          <label id="custom-checkbox" htmlFor="radio1" className="cursor-pointer">
            <input id="radio1" type="radio" name="radio" className="hidden" />
            <span className="checkbox"></span>
          </label>
          <span className="ml-4 mt-2">L</span>
        </div>
        <div className="flex items-center ml-4">
          <label id="custom-checkbox" htmlFor="radio1" className="cursor-pointer">
            <input id="radio1" type="radio" name="radio" className="hidden" />
            <span className="checkbox"></span>
          </label>
          <span className="ml-4 mt-2">M</span>
        </div>
        <div className="flex items-center ml-4">
          <label id="custom-checkbox" htmlFor="radio1" className="cursor-pointer">
            <input id="radio1" type="radio" name="radio" className="hidden" />
            <span className="checkbox"></span>
          </label>
          <span className="ml-4 mt-2">S</span>
        </div>
      </div>
      <hr />
      <div className="mt-4 mb-3">
        <span className="px-4 text-gray-500">Colour</span>
        <div className="top-0 my-5 grid grid-cols-3 gap-6 text-sm">
          <button className="flex flex-col items-center">
            <div className="h-6 w-6 bg-black inline-block rounded-full mb-2"></div>
            <span>Black</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="h-6 w-6 bg-red-700 inline-block rounded-full mb-2"></div>
            <span>Red</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="h-6 w-6 bg-yellow-600 inline-block rounded-full mb-2"></div>
            <span>Yellow</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="h-6 w-6 bg-blue-600 inline-block rounded-full mb-2"></div>
            <span>Blue</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="h-6 w-6 bg-purple-600 inline-block rounded-full mb-2"></div>
            <span>Purple</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="h-6 w-6 bg-white inline-block rounded-full mb-2"></div>
            <span>White</span>
          </button>
        </div>
      </div>
    </>
  )
}
