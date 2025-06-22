import React from "react";

export default function CampaignBanner({ title, count, source }) {
  return (
    <div
      className="relative flex flex-col justify-center items-center gap-2 w-[300px] h-[250px] bg-center bg-cover text-white font-bold"
      style={{ backgroundImage: `url(${source})` }}
    >
      <h5>{title}</h5>
      <p className="font-normal text-sm">{count} items</p>
    </div>
  );
}
