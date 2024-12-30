
import BlogItem from "./BlogItem";
import { useEffect, useState } from "react";
import axios from "axios";

interface BlogData {
  _id: string;
  image: string;
  title: string;
  description: string;
  category: string;
}

const BlogList = () => {
  const [menu] = useState("All");
  const [blogs, setBlogs] = useState<BlogData[]>([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
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