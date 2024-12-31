"use client";
import { Footer } from "@/Components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { FaArrowRight } from "react-icons/fa";

interface BlogData {
  id: string;
  title: string;
  description: string;
  date: number;
  category: string;
  author: string;
  image: string;
}



const BlogPage = ({ params }) => {
  const [data, setData] = useState<BlogData | null>(null);

  const fetchBlogData = async () => {
    const response = await axios.get("/api/blog", {
      params: { id: params },
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className=" py-5 px-5 md:px-12 lg:px-28 ">
        {/* header */}
        <div className="flex justify-between items-center ">
          <Link href="/">
            <h1 className="text-2xl lg:text-3xl font-semibold w-[130px] sm:w-auto text-white">
              Blogs App
            </h1>
          </Link>
          {/* <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black rounded-lg">
            Get Started
            <FaArrowRight />
          </button> */}
        </div>
      </div>
      {/* main */}
      <div className="text-center my-2 mt-28 ">
        <h1 className="text-2xl  sm:text-5xl font-semibold max-w-[700px] mx-auto text-white">
          {data?.title}
        </h1>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[100px] mb-10">
        <Image
          className="border-4 ring-2  ring-gray-300  border-white "
          src={data.image}
          alt="img"
          height={1280}
          width={720}
        />

        <h1 className="my-8 text-[25px] font-semibold text-white ">
          Introduction:
        </h1>

        <div
          className="blog-content text-white"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
        <h3 className="text-white">
          <span className="text-gray-400 tracking-wide">Category: </span>

          {data.category}
        </h3>
        <h3 className="text-white">
          <span className="text-gray-400 tracking-wide">Author: </span>
          {data.author}
        </h3>
        <h3 className="text-white">
          <span className="text-gray-400 tracking-wide">Date: </span>
          {new Date(data.date).toLocaleDateString()}
        </h3>
      </div>
      <Footer />
    </>
  ) : (
    <>
      <h1>not found</h1>
    </>
  );
};

export default BlogPage;
