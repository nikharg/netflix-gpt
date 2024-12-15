import React, { useEffect } from "react";
import "./header.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptState } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptSearch = () => {
    dispatch(toggleGptState());
  };

  return (
    <nav className="navbar" style={user && { padding: "0rem 5rem" }}>
      <img
        className="netflix-logo"
        src={LOGO}
        alt="logo"
        style={user && { height: "70%" }}
      />
      {user && (
        <section id="right">
          <button onClick={handleGptSearch}>
            <p>GPT Search</p>
          </button>
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
