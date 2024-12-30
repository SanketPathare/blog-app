import Sidebar from "@/Components/AdminComponents/Sidebar";
import { FaCircleUser } from "react-icons/fa6";
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer  theme="dark"/>
        <Sidebar />

        <div className="flex flex-col w-full bg-white ">
          <div className="flex items-center justify-between w-full py-8  max-h-[60px] px-12 border-b bg-slate-100">
            <h1 className="font-medium text-xl">Admin Dashboard</h1>
            <span className="text-3xl">
              <FaCircleUser />
            </span>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
