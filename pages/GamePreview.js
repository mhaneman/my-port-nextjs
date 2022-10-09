import React from 'react'
import Image from 'next/image'

import Phone from '../public/phone-in-hand.jpg'

function GamePreview() {
  return (
    <div>
        <Image src={Phone} />
    </div>
  )
}

export default GamePreview