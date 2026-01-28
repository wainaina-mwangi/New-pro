import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'

function Entry() {

    const hours = new Date().getHours() % 12;
    let timeOfDay;

    if(hours < 12){
        timeOfDay='Good Morning'
    }else if(hours >12 && hours <17){
        timeOfDay='Good Evening'
    }
  return (
   <h1>{timeOfDay}</h1>
  )
}

export default Entry