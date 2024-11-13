import React, { useState } from "react";
import Navbar from "../Navbar";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Navbar />
      <img
        className="absolute top-0 h-full w-full object-cover -z-10 brightness-50"
        alt="login-bg"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_small.jpg"
      />
      <form className="flex flex-col p-14 items-center  w-[30vw]  bg-black opacity-80 m-auto gap-8 text-white ">
        <p className="w-full font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input
            className="w-full h-10 indent-2 bg-[#101010] border-gray-500 border-[0.01rem] rounded placeholder:text-gray-300"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="w-full h-10 indent-2 bg-[#101010] border-gray-500 border-[0.01rem] rounded placeholder:text-gray-300"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="w-full h-10 indent-2 bg-[#101010] border-gray-500 border-[0.01rem] rounded placeholder:text-gray-300"
          type="password"
          placeholder="Password "
        />
        {!isSignInForm && (
          <input
            className="w-full h-10 indent-2 bg-[#101010] border-gray-500 border-[0.01rem] rounded placeholder:text-gray-300"
            type="password"
            placeholder="Confirm Password"
          />
        )}
        <input
          className="w-full h-10 font-medium text-lg bg-red-600 "
          type="submit"
          value="Sign In"
        />
        <p className="w-full text-gray-300">
          {isSignInForm ? "New to Netflix?" : "Already a Member?"}{" "}
          <a
            href="/"
            className="text-white font-medium"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up Now" : "Sign In"}
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
