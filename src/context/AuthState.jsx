import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setloggedInUser] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    checkLoginuser();
  }, []);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage?.getItem("token")}`,
    // Add other headers as needed
  };

  const checkLoginuser = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/check`, {
        headers: headers,
      });
      const result = await res?.data;
      if (result) {
        setloggedInUser(result);
        console.log(location.pathname);
        if (location.pathname == "/signIn" || location.pathname == "/signUp") {
          navigate("/", { replace: true });
        } else {
          navigate(location.pathname ? location.pathname : "/");
        }
      } else {
        console.log("error", result);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };
  const login = async (userData) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/login`,
        userData
      );
      const result = await res?.data;
      if (result) {
        localStorage.setItem("token", result.token);
        setloggedInUser(result.user);
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  const register = async (userData) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/register`,
        userData
      );
      const result = await res?.data;

      if (result) {
        navigate("/signIn", { replace: true });
      }
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
