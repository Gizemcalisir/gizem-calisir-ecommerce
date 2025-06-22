import React, { useState } from "react";
import ShopBanner from "../components/ShopBanner";
import FilterSection from "../components/FilterSection";
import FeaturedProducts from "../components/FeaturedProducts";
import Pagination from "../components/Pagination";
import Brands from "../components/brands";

export default function ShopPage() {
  return (
    <div className="w-full px-20 sm:px-40 mx-auto py-10">
      <ShopBanner />
      <FilterSection />
      <FeaturedProducts showTitle={false} />
      <Pagination />
      <Brands />
    </div>
  );
}
