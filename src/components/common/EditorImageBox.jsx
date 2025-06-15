import React from "react";

export default function EditorImageBox({ source, text, height = "500px" }) {
  return (
    <div className="relative w-[325px]">
      <img
        src={source}
        alt={text}
        className="w-full object-cover"
        style={{ height }}
      />

      <h2 className="absolute bottom-3 left-8 bg-white  text-black text-[16px] font-bold text-base py-1 w-32 h-8">
        {text}
      </h2>
    </div>
  );
}
