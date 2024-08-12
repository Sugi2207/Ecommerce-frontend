import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ categories, onCategoryChange, onPriceChange, onRatingChange }) => {
  return (
    <div className="filter-container">
      <div>
        <label>Category:</label>
        <select onChange={(e) => onCategoryChange(e.target.value)}>
          <option value="">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Price:</label>
        <select onChange={(e) => onPriceChange(e.target.value)}>
          <option value="">All</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>
      <div>
        <label>Rating:</label>
        <select onChange={(e) => onRatingChange(e.target.value)}>
          <option value="">All</option>
          <option value="4">4 & Above</option>
          <option value="3">3 & Above</option>
          <option value="2">2 & Above</option>
          <option value="1">1 & Above</option>
        </select>
      </div>
    </div>
  );
};

Filter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  onPriceChange: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
};

export default Filter;
