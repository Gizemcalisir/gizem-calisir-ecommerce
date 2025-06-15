import React from "react";
import ProductBox from "./common/ProductBox";

export default function FeaturedProducts() {
  return (
    <div className="flex flex-col items-center text-center mt-20 sm:mb-40">
      <h2 className="text-[20px] font-semibold text-[#737373]">
        Featured Products
      </h2>
      <h3 className="text-[24px] text-[#252B42] font-bold ">
        BESTSELLER <br className="block sm:hidden" /> PRODUCTS
      </h3>
      <p className="text-[#737373] font-medium text-center text-[14px] max-w-54 sm:max-w-lg">
        Problems trying to resolve the <br className="block sm:hidden" />
        conflict between
      </p>
      <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-8 mt-10">
        <ProductBox
          source="public/featured-1.jpg"
          title="Graphic Design"
          category="English Department"
          price="6.48"
          oldPrice="16.48"
        />
        <ProductBox
          source="public/featured-2.jpg"
          title="Graphic Design"
          category="English Department"
          price="6.48"
          oldPrice="16.48"
        />
        <ProductBox
          source="public/featured-1.jpg"
          title="Graphic Design"
          category="English Department"
          price="6.48"
          oldPrice="16.48"
        />
        <ProductBox
          source="public/featured-1.jpg"
          title="Graphic Design"
          category="English Department"
          price="6.48"
          oldPrice="16.48"
        />
        <ProductBox
          source="public/featured-1.jpg"
          title="Graphic Design"
          category="English Department"
          price="6.48"
          oldPrice="16.48"
        />
        <ProductBox
          source="public/featured-1.jpg"
          title="Graphic Design"
          category="English Department"
          price="6.48"
          oldPrice="16.48"
        />
        <ProductBox
          source="public/featured-1.jpg"
          title="Graphic Design"
          category="English Department"
          price="6.48"
          oldPrice="16.48"
        />
        <ProductBox
          source="public/featured-1.jpg"
          title="Graphic Design"
          category="English Department"
          price="6.48"
          oldPrice="16.48"
        />
      </div>
    </div>
  );
}
