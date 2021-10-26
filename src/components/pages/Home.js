import { useContext } from "react";
import { blogsContext } from "../../context/BlogsContext";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
export default function Home() {
  const { blogs } = useContext(blogsContext);
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.Header}>
        <h3 className={styles.Heading}>Blog App</h3> <Link to="create" className={styles.add}>Add Blog</Link>
      </div>
      <div>
        {blogs &&
          blogs.map((blog) => (
            <div>
              <h3>{blog.name}</h3>
              <p>{blog.desc}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
