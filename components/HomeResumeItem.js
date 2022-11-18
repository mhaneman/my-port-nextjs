import LinkPreview from "./LinkPreview"

export default function HomeResumeItem({title, desc, link, link_name, image, publisher, date}) {
    return (
      <div className="odd:bg-slate-100 even:bg-slate-200">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4
          sm:px-6 sm:py-32 
          lg:max-w-7xl lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
            <p className="mt-4 text-gray-500">
              {desc}
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Published by</dt>
                <dd className="mt-2 text-sm text-gray-500">{publisher}</dd>
              </div>
            </dl>
          </div>
          <div className="">
            <LinkPreview link={link} link_name={link_name} date={date} image={image}/>
          </div>
        </div>
      </div>
    )
  }