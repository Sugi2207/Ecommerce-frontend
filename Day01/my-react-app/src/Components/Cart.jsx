// // src/Components/Cart.jsx
// import React from 'react';
// import PropTypes from 'prop-types';
// import './Cart.css';

// const Cart = ({ items, onRemoveFromCart,onIncrement,onDecrement }) => {
//   if (items.length === 0) {
//     return <p>Your cart is empty</p>;
//   }

//   return (
//     <div className="cart-container">
//       <h2>Shopping Cart</h2>
//       <div className='card'>
//       <ul>
//         {items.map(item => (
//           <li key={item.id} className="cart-item">
//             <img src={item.image} alt={item.title} className="cart-item-img" />
//             <div className="cart-item-details">
//               <h3>{item.title}</h3>
//               <p>Price: ${item.price}</p>

//               <div className="quantity-control">
//                   <button onClick={() => onDecrement(item.id)}>-</button>
//                   <div className="quantity-box">{item.quantity}</div>
//                   <button onClick={() => onIncrement(item.id)}>+</button>
//                 </div>

//               <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       </div>
//       {/* <p>Total: ${items.reduce((total, item) => total + item.price, 0)}</p> */}
//       <div className='price-details'>
//         <div className='cardd'>
//           <h4>Price Details</h4>
//           <p>Subtotal:</p>
//           <p>Items:{Cart.length}</p>
//           <p>Delivery Charge:</p>
//           <h3>Total:</h3>
//           <button className='checkout'>Checkout</button>
//         </div>
//       </div>
//     </div>
//   );
// };
// // PropTypes: Ensures that the items prop is an array of objects with specific properties and that onRemoveFromCart is a function.
// Cart.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       image: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onRemoveFromCart: PropTypes.func.isRequired,
// };

// export default Cart;


// src/Components/Cart.jsx
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { increment, decrement, removeFromCart } from '../Redux/CartSlice';
// import './Cart.css';

// const Cart = () => {
//   const dispatch = useDispatch();
//   const items = useSelector(state => state.cart.items);

//   if (items.length === 0) {
//     return <p>Your cart is empty</p>;
//   }

//   const calculateSubtotal = () => {
//     return items.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const deliveryFee = 5; // Assuming a fixed delivery fee for simplicity
//   const calculateTotal = () => {
//     return calculateSubtotal() + deliveryFee;
//   };

//   return (
//     <div className="cart-container">
//       <h2>Shopping Cart</h2>
//       <div className='card'>
//         <ul>
//           {items.map(item => (
//             <li key={item.id} className="cart-item">
//               <img src={item.image} alt={item.title} className="cart-item-img" />
//               <div className="cart-item-details">
//                 <h3>{item.title}</h3>
//                 <p>Price: ${item.price}</p>
//                 <div className="quantity-control">
//                   <button onClick={() => dispatch(decrement(item.id))}>-</button>
//                   <div className="quantity-box">{item.quantity}</div>
//                   <button onClick={() => dispatch(increment(item.id))}>+</button>
//                 </div>
//                 <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className='price-details'>
//         <div className='cardd'>
//           <h4>Price Details</h4>
//           <p>Subtotal: ${calculateSubtotal().toFixed(2)}</p>
//           <p>Items: {items.length}</p>
//           <p>Delivery Charge: ${deliveryFee.toFixed(2)}</p>
//           <h3>Total: ${calculateTotal().toFixed(2)}</h3>
//           <button className='checkout'>Checkout</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../Redux/CartSlice';
import './Cart.css';
const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  
  const handleIncrement = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity({ id }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFees = 10;
  const total = subtotal + deliveryFees;

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-items-box">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <img src={item.image} alt={item.title} className="cart-item-img" />
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <div className="quantity-controls">
                      <button onClick={() => handleDecrement(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncrement(item.id)}>+</button>
                    </div>
                    <button className="remove-button" onClick={() => handleRemove(item.id)}>Remove</button>
                  </div>
                </div>
                {/* <div className="price-details">
                  <p className="price">${item.price}</p>
                  <p className="total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div> */}
              </div>
            ))
          )}
        </div>
        <div className="summary-box">
          <h3>Price Details</h3>
          <div className="summary-item">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Delivery Fees:</span>
            <span>${deliveryFees.toFixed(2)}</span>
          </div>
          <div className="summary-item total-summary">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;