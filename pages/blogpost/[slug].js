import { useRouter } from "next/router";
import react, { useEffect, useState } from "react";
import styles from "../../styles/BlogPost.module.css";

const Post = (props) => {
  const [blog, setblog] = useState(props.blog);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const { slug } = router.query;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       //console.log("data is" + parsed);
  //       setblog(parsed);
  //     });
  // }, [router.isReady]);

  return (
    <div className={styles.main}>
      <h1>{blog && blog.title}</h1>
      <div>{blog && blog.content}</div>
    </div>
  );
};
export async function getServerSideProps(context) {
  //const router = useRouter();
  //   if (!router.isReady) return;
  //   const { slug } = router.query;

  let slug = context.query.slug;

  const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  const blog = await res.json();

  // Pass data to the page via props
  return { props: { blog } };
}

export default Post;
