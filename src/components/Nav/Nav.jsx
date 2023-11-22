import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav bg-green1">
      <Link to="/dashboard">
        <h2 className="nav-title">IntelliU</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <>
            <Link className="navLink bg-green1" to="/login">
              Login / Register
            </Link>

          </>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            {user.role === "intelliu" && (
              <Link className="navLink bg-green1" to="/adminresults">
                Admin Results
              </Link>
            )}
            {user.role === "intelliu" && (
              <Link className="navLink bg-green1" to="/admindashboard">
                Admin Dashboard
              </Link>

            )}

            <Link className="navLink bg-green1" to="/newitem">
              New Item
            </Link>
            <Link className="navLink bg-green1" to="/faq">
              FAQ
            </Link>
            <Link className="navLink bg-green1" to="/about">
              About
            </Link>

            <LogOutButton className="navLink bg-green1" />

          </>

        )}

        {/* <Link className="navLink bg-green1 " to="/about">
          About
        </Link> */}
      </div>
    </div>
  );
}

export default Nav;
