import { Check, ChevronRightCircle, Users2 } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Channelog = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex w-full px-8 py-4 border-b border-[#ECECEC]">
        <span className="text-lg font-semibold">Channelog</span>
      </div>

      <div className="flex flex-col w-full justify-center items-center mb-32">
        <div className="greetings flex flex-col justify-center items-center w-full gap-2 mt-12">
          <span className="text-center text-sm">Wednesday, November 13</span>

          <span className="text-center text-6xl font-semibold font-serif">
            Tick's Channelog
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 max-w-xl text-[#222222] w-full px-4 md:px-0 relative">
        <div className="w-full flex items-center gap-4 bg-[#FAFAFA] border border-[#ECECEC] rounded-lg px-6 py-4">
          <div className="flex flex-col text-sm text-center text-[#ABABAB] min-w-8">
            <span> --</span>
            <span> ---</span>
          </div>
          <span className="h-10 w-[1.5px] bg-[#ECECEC]" />
          <span className="text-lg font-medium">Multiple User Engagement</span>

          <span className="absolute text-sm right-5 bg-[#F1BD6C]/20 text-[#F1BD6C] px-4 py-[6px] rounded-full">
            Doing
          </span>
        </div>

        <div className="w-full flex items-center gap-4 bg-[#FAFAFA] border border-[#ECECEC] rounded-lg px-6 py-4">
          <div className="flex flex-col text-sm text-center text-[#ABABAB] min-w-8">
            <span> --</span>
            <span> ---</span>
          </div>
          <span className="h-10 w-[1.5px] bg-[#ECECEC]" />
          <span className="text-lg font-medium">Drag and Drop</span>

          <span className="absolute text-sm right-5 bg-[#F1BD6C]/20 text-[#F1BD6C] px-4 py-[6px] rounded-full">
            Doing
          </span>
        </div>

        <div className="w-full flex items-center gap-4 bg-[#FAFAFA] border border-[#ECECEC] rounded-lg px-6 py-4">
          <div className="flex flex-col text-sm text-center text-[#ABABAB] min-w-8">
            <span> 02</span>
            <span> Nov</span>
          </div>
          <span className="h-10 w-[1.5px] bg-[#ECECEC]" />
          <span className="text-lg font-medium">CI/CD Basics</span>

          <span className="absolute text-sm right-5 bg-[#366FE4]/20 text-[#366FE4] px-4 py-[6px] rounded-full">
            Done
          </span>
        </div>

        <div className="w-full flex items-center gap-4 bg-[#FAFAFA] border border-[#ECECEC] rounded-lg px-6 py-4">
          <div className="flex flex-col text-sm text-center text-[#ABABAB] min-w-8">
            <span> 23</span>
            <span> Oct</span>
          </div>
          <span className="h-10 w-[1.5px] bg-[#ECECEC]" />
          <span className="text-lg font-medium">Home Page</span>

          <span className="absolute text-sm right-5 bg-[#366FE4]/20 text-[#366FE4] px-4 py-[6px] rounded-full">
            Done
          </span>
        </div>

        <div className="w-full flex items-center gap-4 bg-[#FAFAFA] border border-[#ECECEC] rounded-lg px-6 py-4">
          <div className="flex flex-col text-sm text-center text-[#ABABAB] min-w-8">
            <span> 02</span>
            <span> Oct</span>
          </div>
          <span className="h-10 w-[1.5px] bg-[#ECECEC]" />
          <span className="text-lg font-medium">Login and Auth</span>

          <span className="absolute text-sm right-5 bg-[#366FE4]/20 text-[#366FE4] px-4 py-[6px] rounded-full">
            Done
          </span>
        </div>

        <div className="w-full flex items-center gap-4 bg-[#FAFAFA] border border-[#ECECEC] rounded-lg px-6 py-4">
          <div className="flex flex-col text-sm text-center text-[#ABABAB] min-w-8">
            <span> 14</span>
            <span> Sep</span>
          </div>
          <span className="h-10 w-[1.5px] bg-[#ECECEC]" />
          <span className="text-lg font-medium">Home Page Design</span>

          <span className="absolute text-sm right-5 bg-[#366FE4]/20 text-[#366FE4] px-4 py-[6px] rounded-full">
            Done
          </span>
        </div>
      </div>
    </div>
  );
};

export default Channelog;
