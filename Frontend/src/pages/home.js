import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Body from "../components/body";
import Login from "./login";
import * as req from "../util/webutil"; 
import { useAuth } from "../context/authcontext";

export default function Home() {
  const [pub, setPub] = useState(true)
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  const { user } = useAuth();

  const handleSearch = (searchTerm) => {
    // Filter items based on the search term
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handlePub = () => { 
    setPub(false)
  }

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

  return (user || pub) ? (
    <div className="home">
      <Header onSearch={handleSearch} pub={handlePub} />
      <Body items={filteredItems} pub={handlePub} />
    </div>
  ):<Login/>

}
