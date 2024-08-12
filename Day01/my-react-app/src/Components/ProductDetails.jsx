import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams(); // Retrieve the product ID from the URL
  const product = PRODUCTS.find((p) => p.id === parseInt(id)); // Find the product by ID

  if (!product) {
    return <div>Product not found</div>;
  }

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "star filled" : "star"}>★</span>
      );
    }
    return stars;
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="product-img" />
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
        <p className="product-rating">
          {renderStars(product.rating.rate)} ({product.rating.rate} based on {product.rating.count} reviews)
        </p>
        <div className="customer-reviews">
          <h3>Customer Reviews</h3>
          <ul>
            {/* Replace with actual reviews data if available */}
            <li>No customer reviews available.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
