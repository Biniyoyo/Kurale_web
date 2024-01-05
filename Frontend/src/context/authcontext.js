// AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { getUser } from "../util/webutil";

const AuthContext = createContext();
const cookies = new Cookies();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for user data in cookies on initial load
    const initialUser = cookies.get("user");
    if (initialUser) {
      setUser(initialUser);
    }
  }, []); // Run this effect only once on mount

  const login = async (userData) => {
    try {
      const res = await getUser(userData);
      setUser(res.user);

      // Set the user data in cookies
      cookies.set("user", res.user, { path: "/" });

      console.log(res.user);
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  const logout = () => {
    // Remove the user data from cookies
    cookies.remove("user", { path: "/" });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
