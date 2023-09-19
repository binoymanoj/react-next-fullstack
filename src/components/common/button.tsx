import React from 'react'

function Button({text, children}:any) {
  return (
    <div>
        <button {...children} className='py-2 px-6 border border-white hover:bg-zinc-300 hover:text-zinc-800 rounded-xl' >{text}</button>
    </div>
  )
}

export default Button