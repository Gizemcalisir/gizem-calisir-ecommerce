import React from "react";

export default function ProductBox({
  source,
  title,
  category,
  price,
  oldPrice,
}) {
  return (
    <div className="relative mt-6 w-64 ">
      <img src={source} alt={title} className="w-full h-full " />
      <h5 className="font-bold mt-6">{title}</h5>
      <p className="  text-[#737373] font-bold mt-4">{category}</p>
      <div className="flex justify-center text-center mt-4 gap-4">
        <h5 className="text-base font-bold text-[#BDBDBD] ">${oldPrice}</h5>
        <h5 className="text-base font-bold  text-[#23856D]">${price}</h5>
      </div>

      <div className="flex gap-2 mt-4 justify-center">
        <div className="w-6 h-6 rounded-full bg-[#23A6F0] border border-gray-300"></div>
        <div className="w-6 h-6 rounded-full bg-[#23856D] border border-gray-300"></div>
        <div className="w-6 h-6 rounded-full bg-[#E77C40] border border-gray-300"></div>
        <div className="w-6 h-6 rounded-full bg-[#252B42] border border-gray-300"></div>
      </div>
    </div>
  );
}
