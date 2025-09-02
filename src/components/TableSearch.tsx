import React from "react";
import Image from "next/image";

const TableSearch = () => {
  return (
    <div>
      <div className=" w-full md:w-auto flex md:flex gap-2 items-center px-2 py-2 ring-[1.5px] ring-gray-300 text-xs rounded-full">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className=" bg-transparent w-[200px] outline-none"
        />
      </div>
    </div>
  );
};

export default TableSearch;
