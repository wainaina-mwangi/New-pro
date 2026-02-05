import React from 'react'

function TernaryOperator() {
  const isGoingOut = true;

  let answer;

  if(isGoingOut==true){
    answer="yes"
  }else{
    answer ="no"
  }

  
  return (
    <div>{answer}</div>
  )
}

export default TernaryOperator