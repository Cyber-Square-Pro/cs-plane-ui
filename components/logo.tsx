import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
   <Link href="/">
    <div className='pt-7'>
        <Image
        src="/cs-pro-logo.jpeg"
        alt="logo"
        height={200}
        width={200}
        />
    </div>
   </Link>
  )
}

