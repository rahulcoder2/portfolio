"use client"
import Image from 'next/image'

import { useTypewriter } from 'react-simple-typewriter'
import { styles } from '../app/styles'
import Avatar from './Avatar'
import ParticlesEffect from './ParticlesEffect'

export default function Hero() {
const [text, count] = useTypewriter({
    words:[
      "Rahul Chaudhary",
      "Frontend Developer"
    ],
    loop: false,
    delaySpeed: 1600
})

  return (
    <section className=' pt-20 bg-tertiary lg:bg-explosion lg:bg-no-repeat lg:bg-center lg:bg-cover lg:pt-40 mix-blend-color-dodge'>
    { /* Hero container */ }
      <div className={`container relative mx-auto ${styles.paddingX} grid gap-5 lg:grid-cols-2 `}>
        { /*Hero content */ }
        <div className='flex flex-row items-start gap-4 max-w-7xl ' >
          { /* text line */ }
          <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-52 violet-gradient' />
          </div>
          { /* Hero text */ }
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>{text}</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop 3D visuals, user <br className='sm:block hidden' />
              interfaces and web applications
            </p>
          </div>
        </div>
        
        <ParticlesEffect />
          
        <div>
            <Avatar />
        </div>
      </div>
    </section>
  )
}