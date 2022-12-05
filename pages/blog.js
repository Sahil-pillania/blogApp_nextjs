import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={styles.main}>
      <h2>Popular blogs</h2>
      <div className="blogItem">
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
      </div>
    </div>
  );
};

export default Blog;
