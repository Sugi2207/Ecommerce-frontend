/*import {useState} from "react";
import Products from '../Products'

const App = () => {
  const [count, setCount] = useState(20);

  const increment = () =>{
    console.log("increment");
    setCount(count+5);
  }
  return (
    <> 
    <h1>App Component</h1>
    <p>Para</p>
    <div>count: {}</div>
    <button onClick={increment}>Increment</button>
    </>
      )
}

export default app;
*/

import React from 'react';
import Products from './components/Products';
import Header from './components/Header';
import { useState } from 'react';


const App = () => {
  const [cartCount,setCartCount]=useState(0);

  const handleAddtoCart=()=>{
    setCartCount(cartCount+1);
  }
  return (
    <div>
      <h1>Product Display</h1>
      <Header cartCount={cartCount}/>
      <Products handleAddtoCart={handleAddtoCart} />
    </div>
  );
};

export default App;