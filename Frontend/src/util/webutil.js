import axios from "axios";

// Function to get all items
export const getAllItems = async () => {
  try {
    const response = await axios.get(
      "https://kurale.onrender.com/api/get/items",
      // "http://localhost:3001/api/get/items",
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
      // "http://localhost:3001/api/create/item",
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

// Function to add a new user
export const handleAddUser = async (newUser) => {
  try {
    const response = await axios.post(
      "https://kurale.onrender.com/api/create/user",
      // "http://localhost:3001/api/create/user",
      newUser,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error while adding user:", error);
    throw error;
  }
};

// Function to get a user

export const getUser = async (userInfo) => {
  try {
    const response = await axios.get(
      "https://kurale.onrender.com/api/get/user",
      // "http://localhost:3001/api/get/user",
      {
        params: userInfo,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 401) {
        throw new Error("Invalid password");
      } else if (status === 404) {
        throw new Error("User not found");
      } else {
        console.error(`Server error: ${status}`, data);
        throw new Error("Server error");
      }
    }
  }
};
