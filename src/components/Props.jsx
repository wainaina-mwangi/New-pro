import React from 'react'

function Props({name,task,version}) {

    
  return (
    <div>
        <h1>{name}</h1>
        <p>{task}</p>
        <p>{version}</p>
    </div>
    
    
    
    
  )
}

export default Props