import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((store) => store.user);
return (
  <div className="bg-green-500 p-4 flex items-center justify-between">
    <div className="flex items-center">
      <Link to="/dashboard">
        <h2 className="text-white text-2xl">IntelliU</h2>
      </Link>
      <img
        src="/images/IntelliuLogoGrey.png"
        alt="Intelliu Logo"
        className="w-8 ml-2"
      />
    </div>
    <div className="flex items-center space-x-4">
      {!user.id ? (
        <>
          <Link
            className="text-white bg-green-700 px-4 py-2 rounded hover:bg-green-600"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-white bg-green-700 px-4 py-2 rounded hover:bg-green-600"
            to="/login"
          >
            Login
          </Link>

        </>
      ) : (
        <>
          {user.role === "intelliu" && (
            <Link
              className="text-white bg-green-700 px-4 py-2 rounded hover:bg-green-600"
              to="/adminresults"
            >
              Admin Results
            </Link>
          )}
          {user.role === "intelliu" && (
            <Link
              className="text-white bg-green-700 px-4 py-2 rounded hover:bg-green-600"
              to="/admindashboard"
            >
              Admin Dashboard
            </Link>
            
          )}
           {user.role === "intelliu" && (
            <Link
              className="text-white bg-green-700 px-4 py-2 rounded hover:bg-green-600"
              to="/registration"
            >
              Register New User
            </Link>
            
          )}

          <Link
            className="text-white bg-green-700 px-4 py-2 rounded hover:bg-green-600"
            to="/newitem"
          >
            New Item
          </Link>
          <Link
            className="text-white bg-green-700 px-4 py-2 rounded hover:bg-green-600"
            to="/faq"
          >
            FAQ
          </Link>
          <Link
            className="text-white bg-green-700 px-4 py-2 rounded hover:bg-green-600"
            to="/about"
          >
            About
          </Link>


          <LogOutButton className="text-white bg-green-700 px-4 py-2 rounded hover:bg-green-600" />
        </>
      )}
    </div>
  </div>
);
}

export default Nav;