import React from "react";

function Map() {
  const nums = [1, 2, 3, 4, 5];
  const names =["Alice","Bob","Erastus","Me"]
  const squares = nums.map(function (num) {
    return num * num;
  });

  const Capitalized =names.map(function(name){
    return name[0].toUpperCase() +  name.slice(1)
  });

  console.log(names);
  
  console.log(squares);

  return <div>Map</div>;
}

export default Map;