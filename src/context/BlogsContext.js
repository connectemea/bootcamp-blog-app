import { createContext, useState } from 'react';

export const blogsContext = createContext();

export default function BlogsProvider(props) {
  const [blogs, setBlogs] = useState([{
    name:"machine learning",
    desc:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
  }]);

  return (
    <blogsContext.Provider value={{ blogs, setBlogs }}>
      {props.children}
    </blogsContext.Provider>
  );
}
