import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function HomeSlider() {
  return (
    <div
      className="flex items-center justify-center w-full h-[750px] bg-cover bg-center sm:h-screen"
      style={{ backgroundImage: `url('/homeslider.jpg')` }}
    >
      <div className="flex flex-col items-center justify-center gap-10 text-center px-16 sm:items-start sm:w-[1000px] sm:gap-16">
        <h5 className="text-white font-bold">SUMMER 2020</h5>
        <h2 className="text-white text-4xl font-bold sm:text-6xl">
          NEW COLLECTION
        </h2>
        <h2 className="text-white text-xl font-normal text-center w-1/3">
          We know how large objects will act, but things on a small scale.
        </h2>
        <button className="bg-[#2DC071] px-10 py-4 rounded-md text-white font-semibold">
          SHOP NOW
        </button>
      </div>
      <div className="absolute w-full flex justify-between align-middle px-4">
        <ChevronLeft color="white" size="44" />
        <ChevronRight color="white" size="44" />
      </div>
    </div>
  );
}
