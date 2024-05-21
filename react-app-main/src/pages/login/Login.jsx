import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    setError(null);

    try {
      const res = await axios.post(`${window.location.origin}/users/login`, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user)); // Store user data in localStorage
      setIsFetching(false);
      window.location.replace("/"); 
    } catch (err) {
      setError("Login failed. Please check your credentials.");
      setIsFetching(false);
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          className="loginInput"
          placeholder="Enter your email..."
          ref={emailRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
        {error && <span className="errorMessage">{error}</span>}
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
};
