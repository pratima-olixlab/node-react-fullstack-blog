// import React, { useState, useEffect } from "react";
// import { IoSettingsOutline } from "react-icons/io5";
// import { RiImageAddLine } from "react-icons/ri";
// import { Link, useHistory } from "react-router-dom";
// import image from "../../assets/images/profile2.png";

// export const User = ({ isLoggedIn, logout }) => {
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const history = useHistory();

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       setUsername(storedUser.username || "");
//       setEmail(storedUser.email || "");
//     }
//   }, []);

//   const handleLogout = () => {
//     logout();
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     history.push("/login");
//   };

//   return (
//     <div className="profile">
//       {isLoggedIn ? (
//         <>
//           <button className="img" onClick={() => setProfileOpen(!profileOpen)}>
//             <img src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//           </button>
//           {profileOpen && (
//             <div className="openProfile boxItems" onClick={() => setProfileOpen(false)}>
//               <Link to="/account">
//                 <div className="image">
//                   <div className="img">
//                     <img src={image} alt="" />
//                   </div>
//                   <div className="text">
//                     <h4>{username}</h4>
//                     <label>Los Angeles, CA</label>
//                   </div>
//                 </div>
//               </Link>
//               <Link to="/create">
//                 <button className="box">
//                   <RiImageAddLine className="icon" />
//                   <h4>Create Post</h4>
//                 </button>
//               </Link>
//               <Link to="/category">
//                 <button className="box">
//                   <RiImageAddLine className="icon" />
//                   <h4>Create Category</h4>
//                 </button>
//               </Link>
//               <button className="box" onClick={handleLogout}>
//                 <IoSettingsOutline className="icon" />
//                 <h4>Log Out</h4>
//               </button>
//             </div>
//           )}
//         </>
//       ) : null}
//     </div>
//   );
// };


import React, { useState, useEffect } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { RiImageAddLine } from "react-icons/ri";
import { Link, useHistory } from "react-router-dom";
import image from "../../assets/images/profile2.png";

export const User = ({ isLoggedIn, logout }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUsername(storedUser.username || "");
      setEmail(storedUser.email || "");
    }
  }, []);

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    history.push("/login");
  };

  return (
    <div className="profile">
      {isLoggedIn ? (
        <>
          <button className="img" onClick={() => setProfileOpen(!profileOpen)}>
            <img src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </button>
          {profileOpen && (
            <div className="openProfile boxItems" onClick={() => setProfileOpen(false)}>
              <Link to="/account">
                <div className="image">
                  <div className="img">
                    <img src={image} alt="" />
                  </div>
                  <div className="text">
                    <h4>{username}</h4>
                    <label>Gujarat, India</label>
                  </div>
                </div>
              </Link>
              <Link to="/create">
                <button className="box">
                  <RiImageAddLine className="icon" />
                  <h4>Create Post</h4>
                </button>
              </Link>
              <Link to="/category">
                <button className="box">
                  <RiImageAddLine className="icon" />
                  <h4>Create Category</h4>
                </button>
              </Link>
              <button className="box" onClick={handleLogout}>
                <IoSettingsOutline className="icon" />
                <h4>Log Out</h4>
              </button>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};