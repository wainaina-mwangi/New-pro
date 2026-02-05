import React from 'react'

function TernaryOperator() {
  const isGoingOut = true;

  let answer;

  if(isGoingOut==true){
    answer="yes"
  }else{
    answer ="no"
  }

  // using ternart operator
  // let answer = isGoingOut==true ? "yes" : "no"

  
  return (
    <div>{answer}</div>
    //writing ternary inside jsx
    // <div>{isGoingOut ? "yes": "no"}</div>
  )
}

export default TernaryOperator