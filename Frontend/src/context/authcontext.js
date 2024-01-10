// AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { getUser } from "../util/webutil";

const AuthContext = createContext();
const cookies = new Cookies();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

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

      if (res.user) {
        setUser(res.user);
        cookies.set("user", res.user, { path: "/" });
        setError(null); // Clear any previous errors
        console.log(res.user);
      } else {
        setError("Incorrect username or password.");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      setError("Incorrect username or password!");
    }
  };

  const logout = () => {
    cookies.remove("user", { path: "/" });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, error, setError }}>
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
