import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={styles.main}>
      <h1>Title of the page is : {slug} </h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nemo
        perspiciatis, voluptate, quis tenetur eum beatae iste, reprehenderit a
        corporis dicta et magni?
      </div>
    </div>
  );
};
export default Post;
