import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const Blog = (props) => {
  //   console.log(props);
  const [blogs, setblogs] = useState(props.allBlogs);

  //   useEffect(() => {
  //     /// console.log("useeffect running");

  //     fetch("http://localhost:3000/api/blogs")
  //       .then((a) => {
  //         return a.json();
  //       })
  //       .then((parsed) => {
  //         //console.log("data is" + parsed);
  //         setblogs(parsed);
  //       });
  //   }, []);

  return (
    <div className={styles.main}>
      <h2>Popular blogs</h2>

      {blogs &&
        blogs.map((item, i) => {
          return (
            <div className="blogItem" key={i}>
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

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/blogs`);
  const allBlogs = await res.json();

  // Pass data to the page via props
  return { props: { allBlogs } };
}

export default Blog;
