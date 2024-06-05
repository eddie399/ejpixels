import React from 'react'
import Herocontent from '../sub/Herocontent'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
      <video autoPlay muted loop className='rotate-100 absolute top-[-300px] left-0 z-[1] w-full h-full object-cover'>
        <source src='/blackhole.webm' type='video/webm'/>
      </video>
      <Herocontent />
    </div>
  )
}

export default Hero
