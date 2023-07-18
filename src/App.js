import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
import {useContext} from "react";
import {useEffect} from "react";
import { AppContext } from './context/AppContext';
import "./App.css";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";


 function App() {

  const {fetchBlogPosts} = useContext(AppContext);
  const[searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();
  

   useEffect( ()=>{
    const page = searchParams.get("page") ?? 1;
    //it means check in url value of page and aasign to page variable if not present page no. then put 1 by default in page variable.

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),tag);

    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null,category);

    }
    else
    {
      fetchBlogPosts(Number(page));

    }

  },[location.pathname,location.search]);

  return(
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog/:blogId" element={<BlogPage/>}/>
        <Route path="/tags/:tag" element={<TagPage/>}/>
        <Route path="/categories/:category" element={<CategoryPage/>}/>
      </Routes>
    
  );
}

export default App;
