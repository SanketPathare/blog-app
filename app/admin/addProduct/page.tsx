"use client";
import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [image, setImage] = useState(null); // Ensure proper type
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "",
    author: "",
  });

  // Data Upload Handler
  const onChangeHandler = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Submit Handler
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!image) {
      toast.error("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("image", image);

    try {
      const response = await axios.post("/api/blog", formData);
      if (response.data.success) {
        toast.success(response.data.msg);

        // Reset form fields after successful submission
        setImage(null);
        setData({
          title: "",
          description: "",
          category: "",
          author: "",
        });
      } else {
        toast.error(response.data.msg || "Submission failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while submitting the form");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
      {/* Upload Image */}
      <p className="text-xl">Upload Thumbnail</p>
      <label htmlFor="image">
        <Image
          className="mt-4"
          src={
            image ? URL.createObjectURL(image) : assets.file_upload
          }
          width={140}
          height={70}
          alt="Thumbnail Preview"
        />
      </label>
      <input
       onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setImage(e.target.files?.[0] || null)
      }
      
        type="file"
        id="image"
        accept="image/*" // Restrict file type
        hidden
        required
      />

      {/* Blog Title */}
      <p className="text-xl mt-4">Blog Title</p>
      <input
        name="title"
        onChange={onChangeHandler}
        value={data.title}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-black"
        type="text"
        placeholder="Type here"
        required
      />

      {/* Blog Author */}
      <p className="text-xl mt-4">Blog Author</p>
      <input
        name="author"
        onChange={onChangeHandler}
        value={data.author}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-black"
        type="text"
        placeholder="Type here"
        required
      />

      {/* Blog Description */}
      <p className="text-xl mt-4">Blog Description</p>
      <textarea
        name="description"
        onChange={onChangeHandler}
        value={data.description}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-black resize-none h-[200px]"
        placeholder="Type here"
        required
      />

      {/* Blog Category */}
      <p className="text-xl mt-4">Blog Category</p>
      <select
        name="category"
        onChange={onChangeHandler}
        value={data.category}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        required
      >
        <option value="">Select Category</option>
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Business">Business</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Health">Health</option>
        <option value="Politics">Politics</option>
        <option value="Society">Society</option>
        <option value="Science">Science</option>
        <option value="World">World</option>
        <option value="Sports">Sports</option>
        <option value="Fashion">Fashion</option>
        <option value="Travel">Travel</option>
        <option value="Food">Food</option>
        <option value="Family">Family</option>
        <option value="Motivation">Motivation</option>
        <option value="Relationships">Relationships</option>
        <option value="Other">Other</option>
      </select>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full sm:w-[200px] mt-4 px-4 py-3 text-white bg-black hover:bg-gray-800 mb-10"
      >
        Submit
      </button>
    </form>
  );
};

export default Page;