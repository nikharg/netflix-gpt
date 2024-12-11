import React from "react";
import "./header.css";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <nav className="navbar" style={user && { padding: "0rem 5rem" }}>
      <img
        className="netflix-logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        style={user && { height: "70%" }}
      />
      {user && (
        <section id="right">
          <div id="profile">
            <img src={user?.photoURL} alt="profile-photo" />
          </div>
          <div id="signout" onClick={handleSignout}>
            (Sign out)
          </div>
        </section>
      )}
    </nav>
  );
};

export default Header;
