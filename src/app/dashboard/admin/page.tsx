import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className=" flex flex-col gap-4 md:flex-row">
      {/* Left */}
      <div className=" w-full lg:w-2/3 flex flex-col gap-8">
        {/* User Card */}
        <div className=" flex justify-between gap-4 flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* Middle Chats */}
        <div className=" flex gap-4 flex-col lg:flex-row">
          {/* Count Chat */}
          <div className=" w-full lg:w-1/3 h-[350px]">
            <CountChart />
          </div>
          {/* Attendance Chat */}
          <div className=" w-full lg:w-2/3 h-[450px]"></div>
        </div>
        {/* Bottom Chat */}
        <div></div>
      </div>
      <div className=" w-full lg:w-1/3">R</div>
    </div>
  );
};

export default AdminPage;
