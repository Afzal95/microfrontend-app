import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { SharedProvider } from 'home/SharedContext';
import Header from "home/Header";
import Footer from "home/Footer";
import Counter from "./Counter";

function ComponentCount() {
  const { count, incrementCount } = useSharedContext();

  console.log('count:', count)

  return <>
  <p>Count: {count}</p>
  <button onClick={incrementCount}>Increase Count</button>
  </> 
  
}

const App = () => (
  <div className="container">
    <div>Name: Counter with shared state from header app</div>
    <SharedProvider>
      <Counter />
    </SharedProvider>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
