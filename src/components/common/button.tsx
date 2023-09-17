import React from 'react'

function Button({text}:any) {
  return (
    <div>
        <button className='py-2 px-6 border border-white hover:bg-zinc-300 hover:text-zinc-800 rounded-xl' >{text}</button>
    </div>
  )
}

export default Button