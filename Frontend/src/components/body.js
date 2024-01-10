// Body.js
import React, { useState } from "react";
import Buy from "./buy";
import "bootstrap/dist/css/bootstrap.min.css";

const Body = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [imageLoadError, setImageLoadError] = useState(false);
  const defaultImageURL = ["/demo.avif", "/black-logo.png"];
  
  const handleImageError = () => {
    setImageLoadError(true);
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const close = (item) => {
    setSelectedItem(null);
  };

  return !selectedItem ? (
    <div className="container mt-4">
      <div className="row" style={{ cursor: "pointer" }}>
        {items.map((item) => (
          <div className="col-md-4 mb-4" key={item._id} onClick={() => setSelectedItem(item)}>
            <div className="card">
              <img
                src={imageLoadError ? defaultImageURL[0] : item.imageURL}
                className="card-img-top"
                alt={item.name}
                onError={handleImageError}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Price: ${item.price}</p>
                <p className="card-text">Location: {item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Buy item={selectedItem} onClose={close}/>
  );
};

export default Body;
