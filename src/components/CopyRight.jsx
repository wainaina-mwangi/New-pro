import React from 'react'

function CopyRight() {
  return (
    
    <div className='flex justify-between items-center bg-black text-white px-8 py-6 border-t border-zinc-800'>
        
        
        <h1 className='text-lg font-semibold tracking-tight'>
          Welcome to <span className="text-blue-500">React</span>
        </h1>
        
        <p className='text-sm text-zinc-400'>
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        
    </div>
  )
}

export default CopyRight