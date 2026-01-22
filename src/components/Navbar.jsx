import React from 'react'

function Navbar() {
  return (
    <header className='flex items-center justify-between px-8 py-4 bg-black text-white shadow-xl sticky top-0 z-50'>
      {/* Logo Section */}
      <div className="flex items-center">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
          className='h-10 w-auto hover:rotate-180 transition-transform duration-500' 
          alt="React logo" 
        />
        <span className="ml-3 font-bold text-xl tracking-tight hidden md:block">ReactDev</span>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className='flex space-x-8 text-sm font-medium'>
          <li className='cursor-pointer text-gray-400 hover:text-blue-400 transition-colors'>Home</li>
          <li className='cursor-pointer text-gray-400 hover:text-blue-400 transition-colors'>About</li>
          <li className='cursor-pointer text-gray-400 hover:text-blue-400 transition-colors'>Contact</li>
        </ul>
      </nav>

      {/* Call to Action Button (Optional but looks nice) */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-all shadow-md shadow-blue-900/20">
        Get Started
      </button>
    </header>
  )
}

export default Navbar