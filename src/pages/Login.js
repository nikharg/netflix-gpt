import React, { useRef, useState } from "react";
import Header from "../components/Header";
import "./login.css";
import { validateForm } from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isError, setIsError] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInForm = (e) => {
    e.preventDefault();
    email.current.value = "";
    password.current.value = "";
    setIsError("");
    if (!isSignInForm) {
      confirmPassword.current.value = "";
      name.current.value = "";
    }
    setIsSignInForm(!isSignInForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsError("");
    let message;
    if (isSignInForm) {
      message = validateForm(email.current.value, password.current.value);
      setIsError(message);
      if (message === null) {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            setIsError("Signed in successfully!");
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + " - " + errorMessage);
            setIsError("SignIn unsuccessful!");
          });
      }
    } else {
      const message = validateForm(
        email.current.value,
        password.current.value,
        confirmPassword.current.value,
        name.current.value
      );
      setIsError(message);
      if (message === null) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: name.current.value,
              photoURL: "https://avatars.githubusercontent.com/u/30589666?v=4",
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                console.log(error);
              });

            console.log(user);
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setIsError(errorCode + " - " + errorMessage);
          });
      }
    }
    console.log(message);
    // if (message === null) {
    //   email.current.value = "";
    //   password.current.value = "";
    //   if (!isSignInForm) {
    //     confirmPassword.current.value = "";
    //     name.current.value = "";
    //   }
    // }
  };
  return (
    <>
      <Header />
      <main className="login">
        <img
          className="login-bg"
          alt="login-bg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_small.jpg"
        />
        <div className="overlay"></div>
        <form className="login-form" onSubmit={handleSubmit}>
          <p className="form-heading">{isSignInForm ? "Sign In" : "Sign Up"}</p>
          {!isSignInForm && (
            <input
              className=""
              type="text"
              placeholder="Full Name"
              ref={name}
            />
          )}
          <input type="text" placeholder="Email Address" ref={email} />
          <input type="password" placeholder="Password " ref={password} />
          {!isSignInForm && (
            <input
              type="password"
              placeholder="Confirm Password"
              ref={confirmPassword}
            />
          )}
          <p id="error-mssg">{isError}</p>
          <input
            id="submit-btn"
            type="submit"
            value={isSignInForm ? "Sign In" : "Sign Up"}
          />
          <p id="signin-toggle">
            {isSignInForm ? "New to Netflix?" : "Already a Member?"}{" "}
            <a href="/" className="" onClick={toggleSignInForm}>
              {isSignInForm ? "Sign Up Now" : "Sign In"}
            </a>
          </p>
        </form>
      </main>
    </>
  );
};

export default Login;
