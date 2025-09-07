import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import SafeComponent from "./SafeComponent";

const Header = React.lazy(()=>import("home/Header"));
const Footer = React.lazy(()=>import("home/Footer"));
const Counter = React.lazy(()=>import("cart/Counter"));

import {useSharedContext,SharedProvider} from "home/SharedContext";
import {capitalize} from "home/utils"

function SomeComponent() {
  const { count, incrementCount } = useSharedContext();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment count</button>
    </div>
  );
}
console.log('process.env:', process.env.PRODUCTS_URL, process.env.CART_URL, process.env.HOME_URL);


const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <SafeComponent>
          <Header />
        </SafeComponent>
        { }
        <div>
          <h5>{
            capitalize("products")
          }</h5>
          <p>Welcome to the Products page</p>
                  <SharedProvider>
          <Counter />
        </SharedProvider>
        </div>
        <Footer />
      </Suspense>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
