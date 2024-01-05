import React from "react";
import { FaTimes, FaShoppingCart, FaShoppingBag } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const Buy = ({ item, onClose }) => {
  const defaultImageURLs = ["/demo.avif", "/black-logo.png"];

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-6">
          <Carousel>
            {defaultImageURLs.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  src={image}
                        className="d-block w-100"
                        style={{height:"50vh"}}
                  alt={`Item ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        {/* Right Section */}
        <div className="col-md-6">
          <div className="row mb-3">
            <div className="col">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <h4>Price: ${item.price}</h4>
              <p>Location: {item.location}</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <h5>Seller Rating: {item.sellerRating}/5</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-primary me-2">
                <FaShoppingCart /> Add to Cart
              </button>
              <button className="btn btn-success">
                <FaShoppingBag /> Buy Now
              </button>
              <button className="btn btn-danger ms-2" onClick={onClose}>
                <FaTimes /> Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
