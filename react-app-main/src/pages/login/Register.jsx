import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import { Helmet } from "react-helmet";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(`${window.location.origin}/users/register`, {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <main className="register">
      <Helmet>
        <title>Prolix System - Register</title>
        <meta name="title" content="Prolix System - Register" />
        <meta name="description" content="Register to create your Prolix System account and start managing your blog." />
        <meta property="og:title" content="Prolix System - Register" />
        <meta property="og:description" content="Register to create your Prolix System account and start managing your blog." />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
      </Helmet>
      <header>
        <h1 className="registerTitle">Register</h1>
      </header>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
          aria-label="Username"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
    </main>
  );
};
