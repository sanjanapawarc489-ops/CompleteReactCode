import React, { useEffect, useState } from 'react';
import Greeting from './Greeting';

export default function App() {
  let[name, setName] = useState("Sanjana")
  const[count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
       setCount(count + 1);
    }, 1000);
  }, [count])

  const update = () => {
    setName("Pawar");
  }
  const Inc = () => {
    setCount(count + 1);
  };
   const Dec = () => {
    setCount(count - 1);
  };
   const Zero = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Welcome to {name}</h1>
      <button onClick={update}>Change Name</button>
      <h1>The CountCalue is: {count}</h1>
      <br></br>
      <button onClick={Inc}>Count is {count}-Increment</button>
      <br></br>
      <button onClick={Dec}>Decrement {count}</button>
      <br></br>
      <button onClick={Zero}>Reset {count}</button>
    </div>
  );
}
