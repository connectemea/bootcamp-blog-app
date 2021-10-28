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
      <div className={styles.cHeader}>
      <Link to="home" className={styles.backBtn} ><i class="fas fa-arrow-left"></i></Link><h3 className={styles.new}>New Blog</h3> .
      </div>
      <div className={styles.cFooter}>
        <input placeholder="Add Title" type="text" name="name" value={blog?.name} className={styles.Title} onChange={handleBlogChange}/>
        <input  type="text" name="desc" value={blog?.desc} className={styles.inp} onChange={handleBlogChange}/>
        <button className={styles.Btn} onClick={handleAddBlog}>Publish</button>
      </div>
    </div>
  );
}