import React, { useState } from "react";
import Header from "../components/Header";
import "./login.css";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
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
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <p className="form-heading">{isSignInForm ? "Sign In" : "Sign Up"}</p>
          {!isSignInForm && (
            <input className="" type="text" placeholder="Full Name" />
          )}
          <input type="text" placeholder="Email Address" />
          <input type="password" placeholder="Password " />
          {!isSignInForm && (
            <input type="password" placeholder="Confirm Password" />
          )}
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
