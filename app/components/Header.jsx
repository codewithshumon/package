"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { PopupMenu } from "@codeshumon/popup-menu";

const Header = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const router = useRouter

  const profileMenuItems = [
    { label: "Profile", action: () => router.push("/profile") },
    { label: "Settings", action: () => router.push("/settings") },
    { label: "Logout", action: () => router.push("/logout") },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-12 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-gray-800">Popup Menu Demo</h1>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        <div className="relative ">
            <PopupMenu
              header={<h4 className="text-center font-bold text-lg">Profile</h4>}
              footer={<button className=" flex justify-center w-full cursor-pointer font-bold text-lg">Logout</button>}
              viewportPadding={15}
              noDefaultStyle
              position='top-left'
              menuClassName='bg-[#513e3e] text-white rounded-lg border border-amber-200 p-2'
              trigger={
                <button
                  className="flex items-center space-x-2 focus:outline-none"
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                >
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center  font-medium">
                    U
                  </div>
                  <span className="text-sm font-medium text-gray-700">User</span>
                </button>
              }
            >
            <div className="flex flex-col gap-1 py-5">
              {profileMenuItems.map((item)=> (
                <button key={item.label} onClick={()=> item.action()} className=" hover:bg-red-500 px-3 py-1 rounded-md">{item.label}</button>
              ))}
              </div>
            </PopupMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
