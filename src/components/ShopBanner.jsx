import { ChevronRight } from "lucide-react";
import React from "react";
import CampaignBanner from "./common/CampaignBanner";

export default function ShopBanner() {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <div className="flex  flex-col my-4 bg-[#FAFAFA] w-full items-center justify-between h-24 sm:flex-row">
        <h3 className="flex font-bold text-2xl">Shop</h3>
        <div className="flex justify-between items-center">
          <a href="" className="font-bold text-sm">
            Home
          </a>
          <ChevronRight color="#BDBDBD" size="16" />
          <h6 className="text-[#BDBDBD] font-bold text-sm">Shop</h6>
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <CampaignBanner title="CLOTHS" count="5" source="/shop-banner-1.png" />
        <CampaignBanner title="CLOTHS" count="5" source="/shop-banner-2.png" />
        <CampaignBanner title="CLOTHS" count="5" source="/shop-banner-3.png" />
        <CampaignBanner title="CLOTHS" count="5" source="/shop-banner-4.png" />
        <CampaignBanner title="CLOTHS" count="5" source="/shop-banner-5.png" />
      </div>
    </div>
  );
}
