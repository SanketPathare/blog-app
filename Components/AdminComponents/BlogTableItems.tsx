import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const BlogTableItem: React.FC<{
  title: string;
  author: string;
  date: string;
  deleteBlog: (id: string) => void;
  mongoId: string;
}> = ({ title, author, date, deleteBlog, mongoId }) => {
  const BlogDate = new Date(date);
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <p>{author ? author : "No author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "no title"}</td>
      <td className="px-6 py-4">{BlogDate.toDateString()}</td>
      <td
        onClick={() => deleteBlog(mongoId)}
        className=" text-lg text-black px-6 py-4 cursor-pointer"
      >
        <RiDeleteBin6Line />
      </td>
    </tr>
  );
};

export default BlogTableItem;
