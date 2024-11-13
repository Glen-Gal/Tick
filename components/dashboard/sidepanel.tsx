import { CheckCircle2Icon, GitGraphIcon, Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

// type Props = {};

const SidePanel = () => {
  return (
    <div className="flex flex-col sticky top-0 left-0 w-[240px] h-[calc(100vh-48px)] overflow-hidden bg-[#F9F9F9] text-[#222222] border-r border-[#ECECEC]">
      <div className="flex flex-col p-4">
        <Link
          href={'/dashboard'}
          className="flex gap-2 justify-start items-center hover:bg-zinc-200 transition rounded-lg px-3 py-2"
        >
          <Home size={18} className="stroke-1" />
          <span className="text-sm">Home</span>
        </Link>
        <Link
          href={'/channelog'}
          className="flex gap-2 justify-start items-center hover:bg-zinc-200 transition rounded-lg px-3 py-2"
        >
          <GitGraphIcon size={18} className="stroke-1" />
          <span className="text-sm">Channelog</span>
        </Link>

        <span className="text-[#ABABAB] text-xs px-3 py-2 mt-2">Workspace</span>

        <Link
          href={'/todos'}
          className="flex gap-2 justify-start items-center hover:bg-zinc-200 transition rounded-lg px-3 py-2"
        >
          <CheckCircle2Icon size={18} className="stroke-1" />
          <span className="text-sm">Ticks</span>
        </Link>
      </div>
    </div>
  );
};

export default SidePanel;
