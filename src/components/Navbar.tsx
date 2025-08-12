import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-between p-4">
      {/* Search Bar */}
      <div className=" hidden md:flex gap-2 items-center px-2 ring-[1.5px] ring-gray-300 text-xs rounded-full">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className=" bg-transparent w-[200px] outline-none"
        />
      </div>
      {/* Icons and User */}

      <div className=" flex items-center gap-6 justify-end w-full">
        <div className=" bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer relative">
          <Image src="/message.png" alt="message" width={20} height={20} />
          <div className=" absolute -top-2 -right-2 bg-purple-500 flex items-center justify-center text-white h-5 w-5 rounded-full text-xs">
            1
          </div>
        </div>
        <div className=" bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">
          <Image src="/announcement.png" alt="message" width={20} height={20} />
        </div>
        <div className=" flex flex-col">
          <span className=" text-xs leading-3 font-medium">John Doe</span>
          <span className=" text-[10px] text-gray-500 text-right">Admin</span>
        </div>

        <Image
          src="/avatar.png"
          alt="avatar"
          width={32}
          height={32}
          className=" rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
