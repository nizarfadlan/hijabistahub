import Link from "next/link"
export default function Breadcrumb (props) {
  const url = props.url.split('/').filter((e) => e)
  var urlPrev = '/'
  const data = url.map((u) => {
    const urlNext = urlPrev + u + '/'
    urlPrev = urlNext
    return { url: urlNext, name: u.replace(/-/g, ' ') }
  })

  return (
    <>
      <div className="relative text-center text-sm mt-24 mb-8 pt-14 font-montserrat transition-all duration-500 ease-in-out">
        <Link href="/" >
          <a className="mr-2 hover:font-bold">Home</a>
        </Link>
        {data.map((d) => (
          <>
            <span className="mr-2">/</span>
            <Link href={d.url}>
              <a className="mr-2 capitalize hover:font-bold">{d.name}</a>
            </Link>
          </>
        ))}
      </div>
    </>
  )
}
