import { useContext } from "react";
import { blogsContext } from "../../context/BlogsContext";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Blog from "../utils/Blog";

export default function Home() {
  const { blogs } = useContext(blogsContext);
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.Header}>
        <h3 className={styles.Heading}>Blog App</h3> <Link to="create" className={styles.add}>Add Blog</Link>
      </div>
      <div>
        {blogs &&
          blogs.map((blog) => <Blog title={blog.name} desc={blog.desc}/>)}
      </div>
    </div>
  );
}
