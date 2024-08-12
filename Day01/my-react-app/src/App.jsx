// import 'React' from react;
// const app=()=>{
//   return( 
//   <React.Fragment>
//     <h1>App component</h1>
//   </React.Fragment>
//   )
// }
// export default app

// import React,{useState} from 'react';
// import Products from './Components/Products';

// const App = () => {
//   return (
//     <div>
//       <h1>Product Display</h1>
//       <Products />
//     </div>
//   );
// };

// export default App;


// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Products from './Components/Products';
import Cart from './Components/Cart';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from './Redux/CartSlice';
import Buy from './Components/Buy';
import ProductDetails from './Components/ProductDetails'
import Login from './Components/Login';
import Signup from './Components/Signup';
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify styles
import { ToastContainer,toast } from 'react-toastify';
const App = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity(1)); // Increment by 1 or change as needed
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity());
  };

  return (
    <Router>
      <div>
        <header className="header">
          <h4 className="logo">Logo</h4>
          <div className="pac">
            <Link to="/">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/cart">Cart: {cartItems.length}</Link>
            <p>Count: {count}</p>
          </div>
        </header>
        
        <Routes>
         
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<div><h1>About</h1><p>This is the about page.</p></div>} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <ToastContainer />        
        {/* <div>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div> */}
      </div>
    </Router>
  );
};

export default App;
