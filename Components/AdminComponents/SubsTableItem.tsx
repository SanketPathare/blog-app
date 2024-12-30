import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const SubsTableItem: React.FC<{
  email: string;
  mongoId: string;
  deleteEmail: (id: string) => void;
  date: string;
}> = ({ email, mongoId, deleteEmail, date }) => {
  const emailDate = new Date(date);

  return (
    <tr className="bg-white border-b text-left">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {email ? email : "No Email"}
      </th>
      <td className="px-6 py-4">{emailDate.toDateString()}</td>
      <td
        className=" text-lg text-black px-6 py-4 cursor-pointer"
        onClick={() => deleteEmail(mongoId)}
      >
        <RiDeleteBin6Line />
      </td>
    </tr>
  );
};

export default SubsTableItem;
