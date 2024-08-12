import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { buyNow, incrementQuantity, decrementQuantity, cancelItem } from '../Redux/buySlice';
import './Buy.css';

const Buy = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = location.state?.product;

  if (!product) {
    return <div>No product selected</div>;
  }

  const handleIncrement = () => {
    dispatch(incrementQuantity({ id: product.id }));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ id: product.id }));
  };

  const handleCancel = () => {
    dispatch(cancelItem({ id: product.id }));
    navigate('/'); // Navigate to the starting page, ensure this path is correct
  };

  const handleBuyNow = () => {
    dispatch(buyNow());
    // Add any additional buy now logic here
  };

  return (
    <div className="buy-page">
      <div className="buy-container">
        <div className="buy-item">
          <div className="item-info">
            <img src={product.image} alt={product.title} className="buy-item-img" />
            <div className="item-details">
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating.rate} (Based on {product.rating.count} reviews)</p>
              <div className="quantity-controls">
                <button onClick={handleDecrement}>-</button>
                <span>{product.quantity}</span>
                <button onClick={handleIncrement}>+</button>
              </div>
              <button className="cancel-button" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
        <div className="summary-box">
          <h3>Price Details</h3>
          <div className="summary-item">
            <span>Price:</span>
            <span>${product.price.toFixed(2)}</span>
          </div>
          <button className="checkout-button" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Buy;
