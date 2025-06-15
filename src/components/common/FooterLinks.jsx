import React from "react";

export default function FooterLinks({ title, subTitle }) {
  return (
    <div className="flex flex-col gap-4 font-bold text-[#737373] ">
      <h5 className="text-black text-2xl mb-4">{title}</h5>
      {subTitle.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}
