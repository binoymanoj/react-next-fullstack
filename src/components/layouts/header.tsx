import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='h-14 bg-zinc-800 text-white px-4 flex items-center justify-between mb-4'>
      <Link href={"/"} className='text-2xl font-semibold font-mono'>
        Binoy Manoj
      </Link>
      <h2 className='text-2xl font-semibold '>
        React & NextJS Every Concepts
      </h2>
    </div>
  )
}

export default Header