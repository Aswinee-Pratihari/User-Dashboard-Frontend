import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setloggedInUser] = useState(null);

  const headers = {
    "Content-Type": "application/json",

    // Add other headers as needed
  };

  const login = async (userData) => {
    try {
      const res = await axios.post("http://localhost:8000/api/login", userData);
      const result = await res?.data;
      if (result) {
        localStorage.setItem("token", result.token);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  const register = async (userData) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/register",
        userData
      );
      const result = await res?.data;
      console.log(result);
      //   if (result) {
      //     localStorage.setItem("token", result.token);
      //   }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };
  return (
    <AuthContext.Provider
      value={{ login, register, loggedInUser, setloggedInUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
