import { useContext } from "react";
import { blogsContext } from "../../context/BlogsContext";
import { Link } from "react-router-dom";
export default function Home() {
  const { blogs } = useContext(blogsContext);
  return (
    <div>
      <div>
        <h3>blogs</h3> <Link to="create">Add Blog</Link>
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
