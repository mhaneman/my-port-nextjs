import React from 'react'

export default function LinkPreview({link, link_name, date, image}) {
  return (
    <a 
      className="mx-auto hover:opacity-60 shadow-md
      lg:flex lg:flex-row lg:h-52" 
    href={link}>
      <img 
        className="bg-white rounded-tr-md rounded-tl-md
          text-left max-h-fit
          lg:h-52 lg:w-auto lg:rounded-bl-md lg:rounded-tr-none lg:object-scale-down
          object-cover h-48 w-full" 
        src={image} alt="" />

      <div className="bg-white w-full p-8 rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md">
        <h2 className="text-gray-700 font-semibold line-clamp-3">{link_name}</h2>
        <div className="flex items-center mt-8">
          <div className="flex items-center">
            <div className="ml-4">
              <p className="text-gray-800 text-sm font-semibold">Published</p>
              <p className="text-gray-600 text-sm">{date}</p>
            </div>
          </div>
          <div className="w-8 h-8 ml-auto bg-gray-200 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" /></svg>
          </div>
        </div>
      </div>
    </a>
  )
}
