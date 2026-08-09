import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Local Storage
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    return saved ? Number(saved) : 0;
  });

  // Dark Mode
  const [darkMode, setDarkMode] = useState(false);

  // Save Count
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  // Increment
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Reset
  const reset = () => {
    setCount(0);
  };

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <h1>Counter App</h1>

      {/* Display Count */}
      <h2
        style={{
          color: count === 0 ? "black" : count % 2 === 0 ? "green" : "red",
        }}
      >
        {count}
      </h2>

      {/* Even / Odd */}
      <h3>{count % 2 === 0 ? "Even Number" : "Odd Number"}</h3>

      <div className="buttons">
        <button onClick={increment}>Increment</button>

        {/* Disable Decrement at 0 */}
        <button onClick={decrement} disabled={count === 0}>
          Decrement
        </button>

        <button onClick={reset}>Reset</button>
      </div>

      <br />

      {/* Dark Mode */}
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default App;