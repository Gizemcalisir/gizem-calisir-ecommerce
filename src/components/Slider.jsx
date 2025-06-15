import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Slider() {
  return (
    <div className="flex items-center justify-center flex-col bg-[#23856D] w-full h-full overflow-hidden pt-40 mt-20 sm:flex-row">
      <div className="flex flex-col items-center justify-center gap-10 text-center px-16 sm:items-start ">
        <h5 className="text-white font-bold sm:text-xl">SUMMER 2020</h5>
        <h2 className="text-white text-4xl font-bold sm:text-6xl sm:w-3/4 sm:text-left">
          Vita Classic Product
        </h2>
        <h2 className="text-white text-xl font-normal text-center sm:text-sm sm:w-3/5 sm:text-left">
          We know how large objects will act, We know how are objects will act,
          We know
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-8">
          <h3 className="font-bold text-2xl text-white">$16.48</h3>
          <button className="bg-[#2DC071] px-10 py-4 rounded-md text-white font-semibold">
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="flex mt-8 ">
        <img src="/slider-2.png" alt="" className="object-contain" />
      </div>
      <div className="absolute w-full flex justify-between itesms-">
        <ChevronLeft color="white" size="44" />
        <ChevronRight color="white" size="44" />
      </div>
    </div>
  );
}
