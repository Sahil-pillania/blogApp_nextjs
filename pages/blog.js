import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const Blog = () => {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    /// console.log("useeffect running");

    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        //console.log("data is" + parsed);
        setblogs(parsed);
      });
  }, []);

  return (
    <div className={styles.main}>
      <h2>Popular blogs</h2>

      {blogs.map((item) => {
        return (
          <div className="blogItem">
            <Link href={`/blogpost/${item.slug}`}>
              <h3>{item.title}</h3>
            </Link>
            <p>{item.content.substr(0, 200)}...</p>
          </div>
        );
      })}

      {/* <div className="blogItem">
        <Link href={"/blogpost/learn-javascript"}>
          <h3>How to learn javascript.</h3>
        </Link>
        <p>Javascript is the language used to design the logics for the web.</p>
      </div>
      <div className="blogItem">
        <h3>How to learn javascript.</h3>
        <p>Javascript is the language used to design the logics for the web.</p>
      </div>
      <div className="blogItem">
        <h3>How to learn javascript.</h3>
        <p>Javascript is the language used to design the logics for the web.</p>
      </div> */}
    </div>
  );
};

export default Blog;
