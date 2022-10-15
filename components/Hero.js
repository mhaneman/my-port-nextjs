import React from 'react'

import DarkModeToggle from './elements/DarkModeToggle'
import MyWorkToggle from './elements/MyWorkToggle'

export default function Hero() {
  return (
    <div style={{backgroundImage: `url(hero-bg.jpg)`}}
      className="relative overflow-hidden h-screen bg-no-repeat bg-cover bg-center bg-fixed
        grid grid-rows-3 justify-center">

        <DarkModeToggle />
        <MyWorkToggle />


        <div className=''>
          <h4>Image Generated using Blender</h4>

          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border 
            border-blue-500 hover:border-transparent rounded">
            Script
          </button>
        </div>
        
    </div>
  )
}