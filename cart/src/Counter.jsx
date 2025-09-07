import React, { useState } from "react";
import "./Counter.css";
import {useSharedContext} from "home/SharedContext";

export default function Counter() {
  // const [count, setCount] = useState(0);
  const {count, incrementCount, decreamentCount, resetCount} = useSharedContext();

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1 className="counter-title">⚡ Counter App</h1>
        <p className="counter-value">{count}</p>

        <div className="counter-actions">
          <button onClick={() => decreamentCount()} className="btn btn-decrease">-</button>
          <button onClick={() => resetCount()} className="btn btn-reset">Reset</button>
          <button onClick={() => incrementCount()} className="btn btn-increase">+</button>
        </div>
      </div>
    </div>
  );
}
