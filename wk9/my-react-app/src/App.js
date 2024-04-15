import logo from './logo.svg';
// import './App.css';

import { useEffect, useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [canReset, setCanReset] = useState(false);
  const incrementClicked = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    if (count > 10)
      setCanReset(true);
  }, [count]);

  return (
    <>
      <div className="App">
        The current number is : {count}
      </div>
      <button onClick={incrementClicked}>Increment</button>
      {canReset?
        <button onClick={() => setCount(0)}>Reset</button>
        :
        <></>
      }
    </>
  );
}

export default App;
