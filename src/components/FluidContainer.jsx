import React from "react";

export default function FluidContainer() {
  return (
    <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left sm:justify-center sm:gap-10 sm:px-10 sm:py-20">
      <div className="flex flex-col items-center px-12 sm:items-start sm:w-1/2 sm:order-2  sm:gap-6">
        <h5 className="text-[16px] font-bold mt-20 text-[#BDBDBD]">
          SUMMER 2020
        </h5>
        <h1 className="text-[30px] text-[#252B42] font-bold mb-4 leading-snug sm:text-[40px] sm:w-1/2">
          Part of the Neural Universe
        </h1>

        <h4 className="text-[20px] text-[#737373] leading-relaxed">
          We know how large objects will act, but things on a small scale.
        </h4>
        <div className="flex flex-col items-center gap-2 mt-4 sm:flex-row sm:items-center sm:justify-start sm:gap-4">
          <button className=" whitespace-nowrap pt-[15px] pb-[15px] pr-[40px] pl-[40px] text-sm rounded bg-[#23A6F0] text-[#FFFFFF] sm:bg-[#2DC071] font-bold">
            BUY NOW
          </button>
          <button className="block sm:hidden whitespace-nowrap pt-[15px] pb-[15px] pr-[40px] pl-[40px] text-sm rounded border border-[#23A6F0] text-[#23A6F0] font-bold">
            Learn More
          </button>
          <button className=" hidden sm:block whitespace-nowrap pt-[15px] pb-[15px] pr-[40px] pl-[40px] text-sm rounded border border-[#2DC071] text-[#2DC071] font-bold">
            READ MORE
          </button>
        </div>
      </div>
      <div className="w-full sm:w-1/2 ">
        <img
          src="fuildcontainer-1.png"
          alt="fuildcontainer-1"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
