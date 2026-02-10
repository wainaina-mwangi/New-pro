import React from 'react'
import { useState } from 'react'

const ComplexState = () => {
const[myFavouriteThings,setMyFavouriteThings]=useState([ ])
const allFavouriteThings = ["English","maths","Biology","Chemistry"]
const thingsElement = myFavouriteThings.map(thing=> <p key={thing}>{thing}</p>)

function addFavouriteThing() {
    setMyFavouriteThings(prevFavThings =>[...prevFavThings,allFavouriteThings.indexOf(0)])

    
}

  return (
    <main>
        <button onClick={addFavouriteThing}>ADD</button>
        <section>
            {thingsElement}
        </section>
    </main>
  )
}

export default ComplexState