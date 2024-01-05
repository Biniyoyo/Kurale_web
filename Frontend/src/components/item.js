// ItemCard.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCard = ({ itemName, description, price, location, imageURL}) => {
  const [imageLoadError, setImageLoadError] = useState(false);
  const defaultImageURL = "/demo.avif";

  const handleImageError = () => {
    setImageLoadError(true);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img
          src={imageLoadError ? defaultImageURL : imageURL}
          className="card-img-top"
          alt={itemName}
          onError={handleImageError}
        />
        <div className="card-body">
          <h5 className="card-title">{itemName}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Price: ${price}</p>
          <p className="card-text">Location: {location}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
