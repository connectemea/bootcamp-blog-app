import { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { blogsContext } from "../../context/BlogsContext";
import styles from "./styles.module.css";

export default function CreateBlog() {
  // to access the context state of blogs list
  const { blogs, setBlogs } = useContext(blogsContext);

  // To handle blog state
  const [blog, setBlog] = useState({});

  // history to handle the route context
  const history = useHistory();

  // To perform add blog
  const handleAddBlog = () => {
    setBlogs([...blogs, blog]);
    history.push("home");
  };

  // blog state onchange handler
  const handleBlogChange = (event) =>
    setBlog({
      ...blog,
      [event.target.name]: event.target.value,
    });

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.cHeader}>
        <Link to="home" className={styles.backBtn}>
          <i class="fas fa-arrow-left"></i>
        </Link>
        <h3 className={styles.new}>New Blog</h3> .
      </div>
      <div className={styles.cFooter}>
        <input
          placeholder="Enter Blog Title *"
          type="text"
          name="name"
          value={blog?.name}
          className={styles.Title}
          onChange={handleBlogChange}
        />
        <textarea
          name="desc"
          placeholder="Enter blog discribtion *"
          value={blog?.desc}
          className={styles.inp}
          onChange={handleBlogChange}
        />
        <button
          className={blog?.name && blog.desc ?styles.createBtn:styles.createBtnDisabled}
          onClick={blog?.name && blog.desc ? handleAddBlog : null}
        >
          Publish
        </button>
      </div>
    </div>
  );
}
