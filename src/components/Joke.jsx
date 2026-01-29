import React from 'react'

function Joke({ setup, punchline }) {
  return (
    <div className=" bg-zinc-900 border border-zinc-800 p-6 rounded-xl my-4 shadow-lg max-w-md">
      <p className="text-zinc-400 text-sm font-mono mb-2 uppercase tracking-widest">The Setup:</p>
      <h3 className="text-xl font-semibold text-white mb-4">{setup}</h3>
      
      <p className="text-zinc-400 text-sm font-mono mb-2 uppercase tracking-widest">The Punchline:</p>
      <p className="text-lg text-blue-400 italic font-medium">"{punchline}"</p>
    </div>
  )
}

export default Joke