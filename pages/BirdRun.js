import React from 'react'

import GamePreview from '../components/GamePreview'

export default function BirdRun() {
  return (
    <>
        <GamePreview 
            name="Bird Run" 
            link="http://localhost:8000/endless_runner.html"
            desc="Infinite Runner"
            build="Godot 3.5 and C#"
            touch_controls = "swipe on the screen"
            demo_controls = "or use A and D to move left and right. Use Space to jump and S to fast fall"/>

        <Article />
    </>)
}

function Article() {
    return (
    <div className='bg-black text-white'>
        <h3> Lets talk about some concepts and how the game was made </h3>
    </div>)
}