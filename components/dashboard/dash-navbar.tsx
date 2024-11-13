import { User2 } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const DashboardNavbar = (props: Props) => {
  return (
    <div className="w-full z-50 flex justify-between items-center sticky top-0 left-0 h-12 bg-[#F9F9F9] text-[#222222] border-b border-[#ECECEC] p-3">
      <Image
        src="/logo_png.png"
        width={150}
        height={53}
        alt="logo"
        className="h-full w-auto object-contain pl-4"
      />

      <div className="flex p-1 w-8 h-8 border border-[#ECECEC] rounded-full bg-white/80">
        <User2 size={18} className="stroke-1 m-auto" />
      </div>
    </div>
  );
};

export default DashboardNavbar;
