import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Body from "../components/body";
import * as req from "../util/webutil"; 

export default function Home() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items); // Assuming you have items state

  const handleSearch = (searchTerm) => {
    // Filter items based on the search term
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsData = await req.getAllItems();
        setItems(itemsData);
        setFilteredItems(itemsData)
      } catch (error) {
        console.error("Error while fetching items:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="home">
      <Header onSearch={handleSearch} />
      <Body items={filteredItems} />
    </div>
  );
}
