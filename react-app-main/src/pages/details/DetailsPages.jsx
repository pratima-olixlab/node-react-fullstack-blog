// import React, { useState, useEffect } from "react";
// import "./details.css";
// import { BsPencilSquare } from "react-icons/bs";
// import { AiOutlineDelete } from "react-icons/ai";
// import axios from "axios";
// import { useParams, useHistory } from "react-router-dom";
// import Popup from "reactjs-popup";

// export const DetailsPages = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [cover, setCover] = useState("");
//   const [date, setDate] = useState("");
//   const [description, setDescription] = useState("");
//   const [comments, setComments] = useState([]);
//   const [commentText, setCommentText] = useState("");
//   const [showComments, setShowComments] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const history = useHistory();

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const response = await axios.get(
//           `${window.location.origin}/users/blog/${id}`
//         );
//         setBlog(response.data);
//         setTitle(response.data.title);
//         setCategory(response.data.category);
//         setCover(response.data.cover);
//         setDate(response.data.date);
//         setDescription(response.data.description);
//         setComments(response.data.comments);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching blog:", error);
//         setError("Failed to fetch blog.");
//         setLoading(false);
//       }
//     };

//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(`${window.location.origin}/users/category`);
//         setCategories(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//         setLoading(false);
//       }
//     };

//     fetchBlog();
//     fetchCategories();
//   }, [id]);

//   const handleDelete = async () => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this blog?"
//     );
//     if (confirmDelete) {
//       try {
//         await axios.delete(`${window.location.origin}/users/blog/${id}`);
//         history.push("/");
//       } catch (error) {
//         console.error("Error deleting blog:", error);
//       }
//     }
//   };

//   const editBlog = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("category", category);
//       formData.append("description", description);
//       formData.append("date", date);
//       if (cover) {
//         formData.append("cover", cover);
//       }
//       formData.append("updateCover", cover ? "true" : "false");

//       const response = await axios.put(
//         `${window.location.origin}/users/blog/${id}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (response.status === 200) {
//         setBlog(response.data.updatedBlog);
//         if (response.data.updatedCategory) {
//           setCover(response.data.updatedCategory.cover);
//         }
//       } else {
//         throw new Error("Failed to update blog.");
//       }
//     } catch (error) {
//       console.error("Error updating blog:", error);
//       alert("Failed to update blog. Please try again.");
//     }
//   };

//   const handleCommentSubmit = async () => {
//     try {
//       const response = await axios.post(
//         `${window.location.origin}/users/blog/${id}/comment`,
//         {
//           text: commentText,
//         }
//       );
//       console.log("Comment added successfully:", response.data);
//       setCommentText("");
//     } catch (error) {
//       console.error("Error adding comment:", error);
//     }
//   };

//   const toggleCommentsVisibility = () => {
//     setShowComments(!showComments);
//   };

//   let coverSrc;
//   if (cover) {
//     const arrayBufferView = new Uint8Array(blog.cover.data);
//     const blob = new Blob([arrayBufferView], { type: "image/jpeg" });
//     coverSrc = URL.createObjectURL(blob);
//   }

//   return (
//     <>
//       {loading ? (
//         <div>Loading...</div>
//       ) : error ? (
//         <div>Error: {error}</div>
//       ) : blog ? (
//         <section className="singlePage">
//           <div className="container">
//             <div className="left">
//               {cover ? (
//                 <img src={coverSrc} alt="" />
//               ) : (
//                 <p>No image available</p>
//               )}
//             </div>
//             <div className="right">
//               <div className="buttons">
//                 <Popup
//                   trigger={
//                     <button className="button">
//                       <BsPencilSquare />
//                     </button>
//                   }
//                   modal
//                   nested
//                 >
//                   {(close) => (
//                     <div className="modal">
//                       <button className="close" onClick={close}>
//                         &times;
//                       </button>
//                       <div className="header"> Edit Blog </div>
//                       <div className="content">
//                         <input
//                           type="text"
//                           value={title}
//                           onChange={(e) => setTitle(e.target.value)}
//                         />
//                         <select
//                           value={category}
//                           onChange={(e) => setCategory(e.target.value)}
//                         >
//                           <option value="">Select a Category</option>
//                           {categories.map((cat) => (
//                             <option key={cat._id} value={cat.category}>
//                               {cat.category}
//                             </option>
//                           ))}
//                         </select>
//                         <input
//                           type="file"
//                           onChange={(e) => setCover(e.target.files[0])}
//                         />
//                         <input
//                           type="text"
//                           value={date}
//                           onChange={(e) => setDate(e.target.value)}
//                         />
//                         <input
//                           type="text"
//                           value={description}
//                           onChange={(e) => setDescription(e.target.value)}
//                         />
//                       </div>
//                       <div className="actions">
//                         <button
//                           className="button"
//                           onClick={() => {
//                             editBlog();
//                             close();
//                           }}
//                         >
//                           Save
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </Popup>

//                 <button className="button" onClick={handleDelete}>
//                   <AiOutlineDelete />
//                 </button>
//               </div>
//               <h1>{blog.title}</h1>
//               <a href="/">#{blog.category}</a>

//               <p>{blog.description}</p>
//               <p>Author: Pratima</p>
//             </div>
//             <div className="comments-section">
//               <div className="toggle-comments">
//                 <button className="button" onClick={toggleCommentsVisibility}>
//                   {showComments ? "Hide Comments" : "Show Comments"}
//                 </button>
//               </div>
//               {showComments && (
//                 <>
//                   <h2>Comments</h2>
//                   {comments &&
//                     comments.map((comment) => (
//                       <div key={comment._id} className="comment">
//                         <p>
//                           {comment.user} {comment.text}
//                         </p>
//                       </div>
//                     ))}
//                 </>
//               )}
//               <textarea
//                 value={commentText}
//                 onChange={(e) => setCommentText(e.target.value)}
//                 placeholder="Add a comment..."
//               ></textarea>
//               <button className="button" onClick={handleCommentSubmit}>
//                 Add Comment
//               </button>
//             </div>
//           </div>
//         </section>
//       ) : (
//         <div>No data available</div>
//       )}
//     </>
//   );
// };


import React, { useState, useEffect } from "react";
import "./details.css";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import Popup from "reactjs-popup";

export const DetailsPages = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [cover, setCover] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${window.location.origin}/users/blog/${id}`);
        setBlog(response.data);
        setTitle(response.data.title);
        setCategory(response.data.category);
        setCover(response.data.cover);
        setDate(response.data.date);
        setDescription(response.data.description);
        setComments(response.data.comments);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError("Failed to fetch blog.");
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${window.location.origin}/users/category`);
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchBlog();
    fetchCategories();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (confirmDelete) {
      try {
        await axios.delete(`${window.location.origin}/users/blog/${id}`);
        history.push("/");
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  const editBlog = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("date", date);
      if (cover) {
        formData.append("cover", cover);
      }
      formData.append("updateCover", cover ? "true" : "false");

      const response = await axios.put(`${window.location.origin}/users/blog/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        setBlog(response.data.updatedBlog);
        if (response.data.updatedCategory) {
          setCover(response.data.updatedCategory.cover);
        }
      } else {
        throw new Error("Failed to update blog.");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Failed to update blog. Please try again.");
    }
  };

  const handleCommentSubmit = async () => {
    try {
      const response = await axios.post(`${window.location.origin}/users/blog/${id}/comment`, {
        text: commentText,
      });
      console.log("Comment added successfully:", response.data);
      setCommentText("");
      setComments([...comments, response.data]); // Update comments list with the new comment
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const toggleCommentsVisibility = () => {
    setShowComments(!showComments);
  };

  let coverSrc;
  if (cover) {
    const arrayBufferView = new Uint8Array(blog.cover.data);
    const blob = new Blob([arrayBufferView], { type: "image/jpeg" });
    coverSrc = URL.createObjectURL(blob);
  }

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : blog ? (
        <section className="singlePage">
          <div className="container">
            <div className="left">
              {cover ? <img src={coverSrc} alt="" /> : <p>No image available</p>}
            </div>
            <div className="right">
              {isLoggedIn && (
                <div className="buttons">
                  <Popup
                    trigger={
                      <button className="button">
                        <BsPencilSquare />
                      </button>
                    }
                    modal
                    nested
                  >
                    {(close) => (
                      <div className="modal">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                        <div className="header"> Edit Blog </div>
                        <div className="content">
                          <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                          <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          >
                            <option value="">Select a Category</option>
                            {categories.map((cat) => (
                              <option key={cat._id} value={cat.category}>
                                {cat.category}
                              </option>
                            ))}
                          </select>
                          <input
                            type="file"
                            onChange={(e) => setCover(e.target.files[0])}
                          />
                          <input
                            type="text"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                          />
                          <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                        <div className="actions">
                          <button
                            className="button"
                            onClick={() => {
                              editBlog();
                              close();
                            }}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    )}
                  </Popup>

                  <button className="button" onClick={handleDelete}>
                    <AiOutlineDelete />
                  </button>
                </div>
              )}
              <h1>{blog.title}</h1>
              <a href="/">#{blog.category}</a>

              <p>{blog.description}</p>
              <p>Author: Pratima</p>
            </div>
            <div className="comments-section">
              <div className="toggle-comments">
                <button className="button" onClick={toggleCommentsVisibility}>
                  {showComments ? "Hide Comments" : "Show Comments"}
                </button>
              </div>
              {showComments && (
                <>
                  <h2>Comments</h2>
                  {comments &&
                    comments.map((comment) => (
                      <div key={comment._id} className="comment">
                        <p>
                           {comment.text}
                        </p>
                      </div>
                    ))}
                </>
              )}
              {isLoggedIn && (
                <>
                  <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Add a comment..."
                  ></textarea>
                  <button className="button" onClick={handleCommentSubmit}>
                    Add Comment
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      ) : (
        <div>No data available</div>
      )}
    </>
  );
};
