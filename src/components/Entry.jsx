import React from 'react'

function Entry() {
    const hours = new Date().getHours() % 12

    let timeOfDay;

    if(hours < 12){
        timeOfDay = 'good mporning'
    }else if(hours >=12 && hours >= 17){
        timeOfDay = "goood evening"
    }else {
        timeOfDay="good night"
    }
  return (
    <h1>{timeOfDay}</h1>
  )
}

export default Entry