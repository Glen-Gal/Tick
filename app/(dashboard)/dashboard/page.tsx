import { Check, ChevronRightCircle, Users2 } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex w-full px-8 py-4 border-b border-[#ECECEC]">
        <span className="text-lg font-semibold">Home</span>
      </div>

      <div className="flex flex-col w-full justify-center items-center mb-32">
        <div className="greetings flex flex-col justify-center items-center w-full gap-2 mt-12">
          <span className="text-center text-sm">Wednesday, November 13</span>

          <span className="text-center text-6xl font-semibold font-serif">
            Good Evening, Yigzin
          </span>

          <div className="mt-2 mx-auto w-fit flex gap-12 justify-center items-center bg-[#FAFAFA] text-[#777777] rounded-full px-8 py-4">
            <span>This Week</span>
            <div className="flex items-center gap-2">
              <div className="flex items-center font-semibold">
                <Check size={20} />
                <span className="text-lg">0</span>
              </div>
              <span className="text-sm">Tasks Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center font-semibold">
                <Users2 size={20} />
                <span className="text-lg">0</span>
              </div>
              <span className="text-sm">Collaborators</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] border border-[#ECECEC] rounded-lg text-[#222222]">
        <div className="flex w-full px-8 py-4 border-b border-[#ECECEC]">
          <span className="text-lg font-medium">Recent Activity</span>
        </div>
        <div className="flex flex-col w-full p-8 gap-4">
          <div className="flex justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium">You</span>
              <span>created an account</span>
            </div>
            <span className="text-sm text-[#777777]">Few min ago</span>
          </div>
        </div>
      </div>

      <Link
        href="/todos"
        className="bg-[#EA4E43] shadow-sm border border-[#ECECEC] hover:bg-[#EA4E43]/75 text-white rounded-full flex items-center gap-4 px-5 py-3 mt-10 transition"
      >
        <span className="">Head to work</span>
        <ChevronRightCircle size={24} className="stroke-1" />
      </Link>
    </div>
  );
};

export default Dashboard;
