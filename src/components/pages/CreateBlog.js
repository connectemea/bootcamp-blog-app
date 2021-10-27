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
      <div>
        <Link to="home">back</Link>
        <h3>blogs</h3>
      </div>
      <div>
        <input
          type="text"
          name="name"
          value={blog?.name}
          onChange={handleBlogChange}
        />
        <input
          type="text"
          name="desc"
          value={blog?.desc}
          onChange={handleBlogChange}
        />
        <button onClick={handleAddBlog}>Create</button>
      </div>
    </div>
  );
}
