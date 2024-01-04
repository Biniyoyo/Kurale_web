// Body.js
import React from "react";
import ItemCard from "./item";

const Body = ({ items }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {items.map((item) => (
          <ItemCard
            key={item.id} // Make sure each item has a unique identifier (e.g., id)
            itemName={item.name}
            description={item.description}
            price={item.price}
            location={item.location}
            imageURL={item.imageURL}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
