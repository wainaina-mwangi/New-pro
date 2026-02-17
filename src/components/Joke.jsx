import React, { useState } from "react";

function Joke(props) {
  const [isShown, setIsShown] = useState(false);
  const [Count, setCount] = useState(0);
  function add() {
    setCount((prevCount) => prevCount + 1);
  }
  function sub() {
    setCount((prevCount) => prevCount - 1);
  }
  // function res() {
  //   setCount(count = 0);
  // }

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }
  return (
    <div className=" bg-zinc-900 border border-zinc-800 p-6 rounded-xl my-4 shadow-lg max-w-md">
      <p className="text-zinc-400 text-sm font-mono mb-2 uppercase tracking-widest">
        The Setup:
      </p>
      <h3 className="text-xl font-semibold text-white mb-4">{props.setup}</h3>

      <p className="text-zinc-400 text-sm font-mono mb-2 uppercase tracking-widest">
        The Punchline:
      </p>
      {isShown && (
        <p className="text-lg text-blue-400 italic font-medium">
          "{props.punchline}"
        </p>
      )}
      <button className="jokes" onClick={toggleShown}>
        Show
      </button>

      <div>
        <button onClick={sub}>-</button>
        <p>{Count}</p>
        <button onClick={add}>+</button>
      </div>
    </div>
  );
}

export default Joke;
