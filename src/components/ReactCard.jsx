import React from 'react'

function ReactCard() {
  return (
   <main className='flex flex-col h-screen items-center justify-center bg-green-100 gap-6 '>
    <img src="react.svg" className='absolute bottom-4 right-4 w-10 opacity-20 group-hover:opacity-100 transition-opacity' />
    <h1 className='text-3xl font-bold mb-4 '>Fun Facts About React</h1>
    <div>
        <ul className='bg-green-600 transition-transform hover:translate-x-3 hover:-translate-y-4 p-6 rounded-lg text-white hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] divide-y divide-green-100 '>
            <li  className='p-4 font-bold'>1. Was first released in 2013</li>
            <li  className='p-4 font-bold'> 2.Was originally created by Jordan Walke</li>
            <li  className='p-4 font-bold'> 3.Has well over 100k stars on GitHub</li>
            <li  className='p-4 font-bold'>4. Is maintained by Meta</li>
            <li className='p-4 font-bold'>5. Powers thousands of enterprise apps</li>
        </ul>
    </div>
    <div>
        <ul className='bg-green-600 transition-transform hover:translate-x-3 hover:-translate-y-4 p-6 rounded-lg text-white hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] divide-y divide-green-100 '>
            <li  className='p-4 font-bold'>1. Was first released in 2013</li>
            <li  className='p-4 font-bold'> 2.Was originally created by Jordan Walke</li>
            <li  className='p-4 font-bold'> 3.Has well over 100k stars on GitHub</li>
            <li  className='p-4 font-bold'>4. Is maintained by Meta</li>
            <li className='p-4 font-bold'>5. Powers thousands of enterprise apps</li>
        </ul>
    </div>
</main>
  )
}

export default ReactCard