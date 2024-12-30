
import BlogItem from "./BlogItem";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogList = () => {
  const [menu, SetMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  };
   useEffect(()=>{
    fetchBlogs();
   },[])

  return (
    <div className="">
      {/* <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => SetMenu("All")}
          className={
            menu === "All"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : "bg-gray-200 text-gray-600 py-1 px-4 rounded-sm "
          }
        >
          All
        </button>
        <button
          onClick={() => SetMenu("Technology")}
          className={
            menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : "bg-gray-200 text-gray-600 py-1 px-4 rounded-sm "
          }
        >
          Tech
        </button>
        <button
          onClick={() => SetMenu("Startup")}
          className={
            menu === "Startup"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : "bg-gray-200 text-gray-600 py-1 px-4 rounded-sm "
          }
        >
          Startup
        </button>
        <button
          onClick={() => SetMenu("Lifestyle")}
          className={
            menu === "Lifestyle"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : "bg-gray-200 text-gray-600 py-1 px-4 rounded-sm "
          }
        >
          Lifestyle
        </button>
      </div> */}
      <div className="flex  flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blogs
          .filter((item) => {
            return menu === "All" ? true : item.category === menu;


          })
          .map((item, index) => {
            return (
              <BlogItem
                key={index}
                id={item._id}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;