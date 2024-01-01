import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthState";

const Navbar = () => {
  const { loggedInUser, setloggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center h-20 px-12 shadow-md ">
      <Link to="/">
        <h2 className="font-semibold text-2xl tracking-wide ">Logo</h2>
      </Link>
      <>
        {loggedInUser ? (
          <button
            className="bg-red-600 rounded-lg shadow-sm text-white font-medium px-3 py-2"
            onClick={() => {
              setloggedInUser(null);
              localStorage.clear("token");
              navigate("/signIn", { replace: true });
            }}
          >
            LogOut
          </button>
        ) : (
          <div className="flex gap-3 items-center">
            <Link
              to="/signIn"
              className="bg-gray-900 rounded-lg shadow-sm text-white font-medium px-3 py-2"
            >
              Sign In
            </Link>
            <button className="text-gray-900 border-2 border-gray-900 rounded-lg shadow-sm bg-white font-medium px-3 py-2">
              Sign Up
            </button>
          </div>
        )}
      </>
    </nav>
  );
};

export default Navbar;
