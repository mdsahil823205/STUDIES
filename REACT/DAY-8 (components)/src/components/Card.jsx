import React from 'react';

const Card = ({ image, title, category, price, inStock }) => {
  return (
    <div className="card">
      <div className="card-img-box">
        <img src={image} alt={title} className="card-img" />
        <span className="card-category">{category}</span>
      </div>

      <div className="card-body">
        <h3 className="card-title">{title}</h3>

        <div className="card-footer">
          <span className="card-price">₹{price}</span>
          <span className={`card-stock ${inStock ? 'in-stock' : 'out-stock'}`}>
            {inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        <button className="card-btn" disabled={!inStock}>
          {inStock ? 'Add to Cart' : 'Unavailable'}
        </button>
      </div>
    </div>
  );
};

export default Card;