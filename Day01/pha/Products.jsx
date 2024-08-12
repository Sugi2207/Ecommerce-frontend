/*import  {PRODUCTS} from "../constants";

const Products = () => {
    console.log(PRODUCTS[0]);

    return (
        <>
        <h1>Products</h1>
        {JSON.stringify(PRODUCTS[0])}
        </>

    )
};

export default Products;*/

import React from 'react';
import { PRODUCTS } from '../constants';
import './Products.css';

const Products = ({handleAddtoCart}) => {
  // Display the first product

  return (
    /*<div>
      <header className='header'> 
        <h5 className='logo'>Logo</h5>
        <div className='hi'>
          <h4>Products</h4>
          <h4>About</h4>
          <h4>cart</h4>
        </div>
        </header> */
        <div className='products-container'>
          {PRODUCTS.map((product)=>(    
    <div key={product.id}className="card">
      <img src={product.image} alt={product.title} className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-price">Price: ${product.price}</p>
        <p className="card-description">{product.description}</p>
        <p className="card-category">Category: {product.category}</p>
        <p className="card-rating">Rating: {product.rating.rate} (Based on {product.rating.count} reviews)</p>
        <button className="card-addtocart" onClick={handleAddtoCart}>Add To Cart</button>
      </div>
    </div>
          ))}
          </div> 

    
  );
};

export default Products;