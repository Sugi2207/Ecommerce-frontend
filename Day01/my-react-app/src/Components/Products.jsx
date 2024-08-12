// import React from 'react';
// import { PRODUCTS } from '../constants';

// const Products = () => {
//   const product = PRODUCTS[0]; // Display the first product

//   return (
//     <div>
//       <h2>Product JSON Output</h2>
//       <pre>{JSON.stringify(product, null, 2)}</pre>
//     </div>
//   );
// };

// export default Products;

// import React, { useState } from 'react';
// import { PRODUCTS } from '../constants';
// import './Products.css';

// const Products = () => {
//   const [cartCount, setCartCount] = useState(0);

//   const handleAddtoCart = () => {
//     setCartCount(cartCount + 1);
//   };

//   return (
//     <div>
//       <header className="header">
//         <h4 className="logo">Logo</h4>
//         <div className='pac'>
//           <p>Products</p>
//           <p>About</p>
//           <p>Cart: {cartCount}</p>
//         </div>
//       </header>
//       <div className="products-container">
//         {PRODUCTS.map((product) => (
//           <div key={product.id} className="card">
//             <img src={product.image} alt={product.title} className="card-img" />
//             <div className="card-body">
//               <h2 className="card-title">{product.title}</h2>
//               <p className="card-price">Price: ${product.price}</p>
//               <p className="card-description">{product.description}</p>
//               <p className="card-category">Category: {product.category}</p>
//               <p className="card-rating">Rating: {product.rating.rate} (Based on {product.rating.count} reviews)</p>
//               <button className="card-add" onClick={handleAddtoCart}>Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;



// src/Components/Products.jsx
import React,{useState} from 'react';
import { PRODUCTS } from '../constants';
import './Products.css';
import PropTypes from 'prop-types'; // To validate the type of props passed to the component]
import { useSelector,useDispatch} from 'react-redux';   //******
import { buyNow } from '../Redux/counterSlice';
import { addCart } from '../Redux/CartSlice'; // Ensure you import the correct action
import { useNavigate,Link } from 'react-router-dom'; // Import useNavigate for navigation
import { setSearchTerm } from '../Redux/productSlice'; // Import the setSearchTerm action
import {toast} from 'react-toastify'
import Filter from './Filter'; // Import the Filter component

const Products = () => {   //The Products component takes onAddToCart as a prop.
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const { products, searchTerm } = useSelector((state) => state.products);
  const cartItems=useSelector((state)=>state.cart.cart);
  // const handleIncrement=()=>{
  //   dispatch(increment(1));
  // }
  const [filteredCategory, setFilteredCategory] = useState('');
  const [filteredPrice, setFilteredPrice] = useState('');
  const [filteredRating, setFilteredRating] = useState('');

  
  const handleCategoryChange = (category) => {
    setFilteredCategory(category);
  };

  const handlePriceChange = (price) => {
    setFilteredPrice(price);
  };

  const handleRatingChange = (rating) => {
    setFilteredRating(rating);
  };

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      filteredCategory ? product.category === filteredCategory : true
    )
    .filter((product) =>
      filteredRating ? product.rating.rate >= filteredRating : true
    )
    .sort((a, b) => {
      if (filteredPrice === 'low') {
        return a.price - b.price;
      } else if (filteredPrice === 'high') {
        return b.price - a.price;
      }
      return 0;
    });
  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  // const filteredProducts = products.filter((product) =>
  //   product.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const handleAddToCart = (product) => {
    dispatch(addCart(product));
    toast.success(`${product.title} added to cart`);
  }

  
  const handleBuy = (product) => {
    navigate('/buy', { state: { product } });
  };

  const isInCart=(productId)=>{
    return cartItems.some((item) => item.id === productId);
  }
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <>
     <div className="search-container">
    <input
      type="text"
      placeholder="Search for products..."
      value={searchTerm}
          onChange={handleSearchChange}
      className="search-input"
    />
     <div className="filter-search-container">
        <Filter
          categories={categories}
          onCategoryChange={handleCategoryChange}
          onPriceChange={handlePriceChange}
          onRatingChange={handleRatingChange}
        />
   
  </div>
  </div>
    <div className="products-container">
      {filteredProducts.map((product) => (
        <div key={product.id} className="card" >
          <Link to = {`/product/${product.id}`}>
          <img src={product.image} alt={product.title} className="card-img" />
          </Link>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p className="card-price">Price: ${product.price}</p>
            <p className="card-description">{product.description}</p>
            <p className="card-category">Category: {product.category}</p>
            <p className="card-rating">Rating: {product.rating.rate} (Based on {product.rating.count} reviews)</p>
            {isInCart(product.id) ? (
                <button className="card-add" onClick={() => navigate('/cart')}>Go to Cart</button>
              ) : (
                <button className="card-add" onClick={() => handleAddToCart(product)}>Add to Cart</button>
              )}
        {/* <button className='card-add' onClick={() => dispatch(increment())}>Increment</button> */}
        {/* <button className='card-add' onClick={handleIncrement}>Increment</button>
        <button className='card-add' onClick={() => dispatch(decrement())}>Decrement</button> */}
        <button className="card-add" onClick={() => handleBuy(product)}>Buy Now</button>

          </div>
        </div>
      ))}
    </div>
  </>
  );
};
Products.propTypes = {
  // onAddToCart: PropTypes.func.isRequired,     //Ensures that the onAddToCart prop is a function.
};
export default Products;
