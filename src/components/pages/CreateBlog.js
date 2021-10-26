import { useContext, useState } from "react";
import {useHistory, Link} from 'react-router-dom';
import { blogsContext } from "../../context/BlogsContext";
import styles from './styles.module.css';

export default function CreateBlog (){
  const { blogs, setBlogs } = useContext(blogsContext);
  const [blog, setBlog] = useState({})
  const history = useHistory()

  const handleAddBlog = () =>{
      setBlogs(
      [
          ...blogs,
          blog
      ]
  )
  history.push("home")
}
  const handleBlogChange = (event) => setBlog({
      ...blog,
      [event.target.name]:event.target.value
  }) 

  return (
    <div className={styles.contentWrapper}>
      <div>
      <Link to="home">back</Link><h3>blogs</h3> 
      </div>
      <div>
        <input type="text" name="name" value={blog?.name} onChange={handleBlogChange}/>
        <input type="text" name="desc" value={blog?.desc} onChange={handleBlogChange}/>
        <button onClick={handleAddBlog}>Create</button>
      </div>
    </div>
  );
}