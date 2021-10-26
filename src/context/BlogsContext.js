import { createContext, useState } from 'react';

export const blogsContext = createContext();

export default function BlogsProvider(props) {
  const [blogs, setBlogs] = useState([]);

  return (
    <blogsContext.Provider value={{ blogs, setBlogs }}>
      {props.children}
    </blogsContext.Provider>
  );
}
