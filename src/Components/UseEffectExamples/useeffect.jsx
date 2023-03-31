import React, { useEffect, useState } from "react";

function Useeffect() {
  const [count, setCount] = useState(0);
  // if you do not give empty array it will called after each render
  useEffect(
    function callback() {
      console.log(`title has changed`);
      document.title = `clicked ${count} times`;
    },
    [count]
  );
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>INCREAMENT</button>
    </div>
  );
}

export default Useeffect;
