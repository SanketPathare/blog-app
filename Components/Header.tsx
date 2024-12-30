import axios from "axios";
import { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";

const Header = () => {
  const [email, setEmail] = useState("");

  // Submit handler for  the email
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post("/api/email", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      // After the submit reset email input
      setEmail("");
    } else {
      toast.error("Error");
    }
  };

  return (
    <>
      <div className=" py-5 px-5 md:px-12 lg:px-28 ">
        <div className="flex  justify-between  items-center ">
          {/* Logo  */}
          <h1 className="text-2xl lg:text-3xl font-semibold w-[130px] sm:w-auto text-white">
            Blogs App
          </h1>
          {/* <button className=" flex items-center  gap-2  font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-w  rounded-lg">
            Get Started
            <FaArrowRight />
          </button> */}
        </div>
      </div>
      <div className="text-center my-8 mt-24">
        <h1 className="text-3xl  sm:text-7xl font-medium text-white">
          Latest Blogs
        </h1>
        <h2 className=" mt-3 text-2xl sm:text-5xl text-white ">
          Discover Your Next Favorite Read
        </h2>
        <p className="mt-4 max-w-[740px] m-auto text-xs sm:text-xl text-white">
          Unveiling Stories That Inspire. Dive into a world of insights and
          inspiration. Explore, engage, and enlighten with every post.
        </p>
        <form
          onSubmit={onSubmitHandler}
          action=""
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-white   rounded-lg mb-20"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your Email"
            className="pl-4 outline-none rounded-lg bg-black text-white"
          />
          <button
            type="submit"
            className=" text-white rounded-r-lg font-medium py-4 px-4 sm:px-8 border-l border-white active:bg-white active:text-black
         "
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default Header;
