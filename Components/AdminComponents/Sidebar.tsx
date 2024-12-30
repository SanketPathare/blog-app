"use client";
import React, { useState } from "react";
import { Menu, X, PenSquare, PlusCircle, ScrollText } from "lucide-react";

interface SidebarItemProps {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
  href,
  icon: Icon,
  text,
  onClick,
}) => (
  // Add your own CSS styles here to customize the sidebar item appearance
  <a href={href} onClick={onClick} className="block no-underline text-inherit">
    <div className="flex items-center border  border-black gap-3 font-medium px-3 py-2 bg-white hover:bg-black hover:text-white mb-5 transition-colors duration-200">
      <h1 className="flex justify-center items-center gap-4 w-full">
        <span className="text-2xl">
          <Icon size={24} />
        </span>
        {text}
      </h1>
    </div>
  </a>
);

// SIDEBAR
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      href: "/admin/addProduct",
      icon: PlusCircle,
      text: "Add Blogs",
    },
    {
      href: "/admin/blogList",
      icon: PenSquare,
      text: "Blog Lists",
    },
    {
      href: "/admin/subscription",
      icon: ScrollText,
      text: "Subscription",
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-slate-100 border-b z-50">
        <div className="flex justify-between items-center px-4 py-3">
          <h1 className="text-2xl lg:text-3xl font-semibold text-black">
            Blogs App
          </h1>
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-slate-200 rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
          {/* Desktop Logo - Hidden on Mobile */}
        <div className="flex flex-col bg-slate-100 border h-full">
          <div className="hidden lg:block px-2 sm:pl-14 py-3 border-b">
          <h1 className="text-2xl lg:text-3xl font-semibold w-[130px] sm:w-auto ">
            Blogs App
          </h1>
          </div>

          {/* Sidebar Content */}
          <div className="w-64 lg:w-80 h-full py-12 p-2 mt-14 lg:mt-0">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                text={item.text}
                onClick={closeSidebar}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
