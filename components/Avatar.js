"use client"

// Next components
import Image from 'next/image'


export default function Avatar() {
  return(
    <div className='w-full'>
      <Image
        src="/avatar.png"
        width={737}
        height={678}
        alt="logo"
      />
    </div>
  )
}