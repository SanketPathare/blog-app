'use client'
import SubsTableItem from '@/Components/AdminComponents/SubsTableItem'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
const page = () => {
  const [emails, setEmails] = useState([]);

  // fetch all the emails from the server
  const fetchEmails = async () => {
    const response = await axios.get("/api/email");
    setEmails(response.data.emails);
  };

  // delete a specific email
  const deleteEmail = async (mongoId) => {
    const response = await axios.delete("/api/email", {
      params: {
        id: mongoId,
      },
    });
    // toast error message if error occurs and cancel the request  otherwise return error message
    if (response.data.success) {
      toast.success(response.data.msg);
      fetchEmails();
    } else {
      toast.error("Error");
    }
  };

  // fetch all emails when the component mounts
  useEffect(() => {
    fetchEmails();
  }, []);
  return (
    <>
      <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 ">
        <h1 className="text-xl">All Subscription</h1>
        <div className="relative max-w-full h-[80vh] overflow-x-auto mt-4 border border-black mb-10">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs text-left text-gray-700 uppercase bg-slate-200 border-b border-black ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Email Subscription
                </th>
                <th scope="col" className="  px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              
               {emails.map((item,index)=>{
                return <SubsTableItem key={index} mongoId={item._id} deleteEmail={deleteEmail} email={item.email} date={item.date}/>;
            })} 
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default page;
