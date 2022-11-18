import React from 'react'
import Image from 'next/image'

import { ArrowsPointingOutIcon, ArrowsPointingInIcon } from '@heroicons/react/24/outline'

import TabletHoriz from '../public/ipad-horiz.jpg'
import TabletVirt from '../public/ipad-virt.jpg'
import Iphone from '../public/iphone-outline.png'

export default function GamePreview({name, link, orient, desc, build, touch_controls, demo_controls}) {
  return (
    <div
    className='w-screen h-screen
    items-center text-center
    px-5
    grid 
    lg: grid-cols-3'
    >
      <div className="">
        <div className='text-9xl'> {name} </div>
        <div className='text-2xl'> {desc} </div>
        <div className='text-md'> {build} </div>
      </div>
      
      <Preview link={link} orient={orient} />

      <div className="">
        <div className='text-lg'> {touch_controls} </div>
        <div className='text-md'> {demo_controls} </div>
      </div>

    </div>
  )
}

function Preview({ link }) {
  return (
    <div className="relative">
      <div className="sm: visible lg:invisible"> 
        <h1>Are you on a mobile device or tablet?</h1>
        <h2>Consider downloading the app</h2>
      </div>

      {/* <div className="sm: invisible lg:visible
      absolute 
      top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <Image
          src={TabletVirt}
          layout="fixed"
          width="987"
          height="698"
          />
      </div> */}

      {/* <iframe src = {SoccerSave} className='
      absolute
      top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]
      sm: invisible lg:visible
      md:h-[612px] md:w-[805px]'></iframe> */}


      <div className="sm: invisible lg:visible
        absolute
        top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <Image
            src={Iphone}
            layout="fixed"
            height="800px"
            width="446px"
            />
        </div>

      <iframe src = {link} className='
            absolute
            rounded-[2.5rem] overfow-hidden
            top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]
            sm: invisible lg:visible
            md:h-[678px] md:w-[320px]'></iframe>

      <button className="
      bg-blue-300 w-8 rounded-md absolute z-10
      top-1/2 left-1/2 translate-x-[150px] translate-y-[330px]">
        <ArrowsPointingOutIcon />
      </button>
    </div>
  )
}