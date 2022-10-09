import React from 'react'

import DarkModeToggle from './elements/DarkModeToggle'
import MyWorkToggle from './elements/MyWorkToggle'

export default function Hero() {
  return (
    <div style={{backgroundImage: `url(hero-bg.jpg)`}}
      className="relative overflow-hidden h-screen bg-no-repeat bg-cover bg-center bg-fixed">

        <DarkModeToggle />
        <MyWorkToggle />

        <h4>Image Produced using Blender</h4>

        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Source Code
        </button>
    </div>
  )
}