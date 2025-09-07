import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from "./Header";
import Footer from "./Footer";
import { useSharedContext, SharedProvider } from './SharedContext';

function SomeComponent() {
  const { count, incrementCount } = useSharedContext();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment count</button>
    </div>
  );
}

const App = () => (
  <div className="container">
    <Header />
    <div>
      <h5>Home</h5>
      <p style={{fontSize:"16px",color:"grey"}}>Welcome to the Home page, This exports header footer,utility funcs and counter state. This does not import any app.</p>
    </div>
    {/* <SharedProvider>
      <SomeComponent />
    </SharedProvider> */}
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
