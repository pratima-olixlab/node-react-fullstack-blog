import React, { useState, useEffect } from "react";
import axios from "axios";
import image from "../../assets/images/profile.jpeg";
import "./account.css";

export const Account = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setUsername(parsedUser.username || "");
      setEmail(parsedUser.email || "");
    }
  }, []);

  const handleUpdate = async () => {
    try {
      if (!user || !user._id) {
        console.error("User ID not found");
        return;
      }

      const updatedUserData = {
        username,
        email,
      };

      const res = await axios.put(`${window.location.origin}/users/${user._id}`, updatedUserData);

      if (res.status === 200) {
        const updatedUser = { ...user, ...updatedUserData };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
      } else {
        console.error("Update failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section className="accountInfo">
        <div className="container boxItems">
          <h1>Account Information</h1>
          <div className="content">
            <div className="left">
              <div className="img flexCenter">
                <input type="file" accept="image/*" src={image} alt="img" />
                <img src={image} alt="images" className="image-preview" />
              </div>
            </div>
            <div className="right">
              <label htmlFor="">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="button" onClick={handleUpdate}>
                Update
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
