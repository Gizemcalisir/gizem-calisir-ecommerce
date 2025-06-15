import React from "react";
import { AlarmClock, ChartArea, ChevronRight } from "lucide-react";

export default function PostBox({ source }) {
  return (
    <div className="shadow-lg">
      <div className="">
        <div className="rounded-sm bg-[#E74040] text-white absolute m-4 px-2">
          NEW
        </div>
        <img
          src={source}
          alt={source}
          className="w-full h-[300px]  object-cover"
        />
      </div>
      <div className="flex flex-wrap p-6 pb-9 gap-4">
        <div className="flex gap-4 text-sm text-[#737373] font-normal">
          <p className="text-[#8EC2F2]">Google</p>
          <p>Trending</p>
          <p>New</p>
        </div>
        <h4 className="text-left font-normal">
          Loudest à la Madison #1 (L'integral)
        </h4>
        <p className="text-[#737373] text-sm text-left">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="flex justify-between w-full">
          <div className="flex gap-2">
            <AlarmClock color="#23A6F0" size="16" />
            <p className="text-xs font-normal text-[#737373]">22 April 2021</p>
          </div>
          <div className="flex  gap-2">
            <ChartArea color="#23856D" size="16" />
            <p className="text-xs font-normal text-[#737373]">10 Comments</p>
          </div>
        </div>
        <button className="flex items-center text-[#737373] font-bold mt-2">
          Learn More
          <ChevronRight color="#23A6F0" />
        </button>
      </div>
    </div>
  );
}
