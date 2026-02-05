import React, { useState } from 'react'

function TernaryOperator() {

  const[isGoingOut,setisGoingOut]=useState(true)
  // const isGoingOut = true;

  // let answer;

  // if(isGoingOut==true){
  //   answer="yes"
  // }else{
  //   answer ="no"
  // }

  // using ternart operator
  // let answer = isGoingOut==true ? "yes" : "no"

  
  return (
    <div>
      {/* {answer} */}
    <div>
      <h1>updatings states</h1>
        <button>{isGoingOut==true ? "yes" : "no"}</button>
    </div>
    </div>
    //writing ternary inside jsx
    // <div>{isGoingOut ? "yes": "no"}</div>
    
    
  )
}

export default TernaryOperator