import { useContext, useState } from "react";
import {useHistory, Link} from 'react-router-dom';
import { blogsContext } from "../../context/BlogsContext";

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
    <div>
      <div>
      <Link to="home">back</Link><h3>blogs</h3> 
      </div>
      <div>
        <input type="text" name="title" value={blog?.name} onChange={handleBlogChange}/>
        <input type="text" name="desc" value={blog?.desc} onChange={handleBlogChange}/>
        <button onClick={handleAddBlog}>Create</button>
      </div>
    </div>
  );
}