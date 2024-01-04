import axios from "axios";

// Function to get all items
export const getAllItems = async () => {
  try {
    const response = await axios.get(
      // "https://kurale.onrender.com/api/get/items",
      "http://localhost:3001/api/get/items",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error while getting items:", error);
    throw error;
  }
};

// Function to add a new item
export const handleAddItem = async (newItem) => {
  try {
    const response = await axios.post(
      "https://kurale.onrender.com/api/create/item",
      newItem,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error while adding item:", error);
    throw error; 
  }
};
