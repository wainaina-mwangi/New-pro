import React from 'react'
import { useState } from 'react'


function State() {
  const [count, setCount] = useState(0);

  // let [count,setCount]= useState(0) // now this works with the second function

  function add() {
    setCount(count + 1);
  }
  

  function sub() {
    setCount(count - 1);
  }

//   or;
//   function add() {
//     setCount(count++); // but for this to work you must use let when setting state
//   }
  return (
    <main className='state'>
      <h1>How to update states</h1>
      <button onClick={sub}>-</button>
      <h2>{count}</h2>
      <button onClick={add}>+</button>
    </main>
  );
}




export default State