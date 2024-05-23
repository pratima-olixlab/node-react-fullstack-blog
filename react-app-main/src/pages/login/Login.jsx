import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { Helmet } from 'react-helmet';

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
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setIsFetching(false);
      window.location.replace("/"); 
    } catch (err) {
      setError("Login failed. Please check your credentials.");
      setIsFetching(false);
    }
  };

  return (
    <main className="login">
      <Helmet>
        <title>Prolix System - Login</title>
        <meta name="title" content="Prolix System - Login" />
        <meta name="description" content="Login to access your Prolix System account and manage your blog." />
        <meta property="og:title" content="Prolix System - Login" />
        <meta property="og:description" content="Login to access your Prolix System account and manage your blog." />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
      </Helmet>
      <header>
        <h1 className="loginTitle">Login</h1>
      </header>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="loginInput"
          placeholder="Enter your email..."
          ref={emailRef}
          aria-label="Email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
          aria-label="Password"
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          {isFetching ? 'Logging in...' : 'Login'}
        </button>
        {error && <span className="errorMessage">{error}</span>}
      </form>
      <footer>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">
            Register
          </Link>
        </button>
      </footer>
    </main>
  );
};
