import { useState } from "react";
import "./App.css";

const App = () => {
  return (
    <>
      <div>
        <h1>Sip Happens Café</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </div>
      <div>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
        <button>Reset</button>
      </div>
      <div>
        <ul>
          <li>
            <span>Good:</span>
            <span>3</span>
          </li>
          <li>
            <span>Neutral:</span>
            <span>1</span>
          </li>
          <li>
            <span>Bad:</span>
            <span>1</span>
          </li>
          <li>
            <span>Total:</span>
            <span>5</span>
          </li>
          <li>
            <span>Positive:</span>
            <span>80%</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default App;
