import { useState } from "react";
import "./App.css";
import MyInput from "./components/MyInput";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <>
      {/* <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <br />
      <button onClick={resetCounter}>Resetar</button>
     */}

      <MyInput></MyInput>
    </>
  );
}

export default App;
