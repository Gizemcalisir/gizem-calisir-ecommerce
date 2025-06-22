import React from "react";
import ProductBox from "./common/ProductBox";

export default function FeaturedProducts({ showTitle = true }) {
  return (
    <div className="flex flex-col items-center text-center mt-20 sm:mb-32">
      {showTitle && (
        <>
          <h2 className="text-[20px] font-semibold text-[#737373]">
            Featured Products
          </h2>
          <h3 className="text-[24px] text-[#252B42] font-bold ">
            BESTSELLER <br className="block sm:hidden" /> PRODUCTS
          </h3>
          <p className="text-[#737373] font-medium text-center text-[14px] max-w-54 sm:max-w-lg mb-10">
            Problems trying to resolve the <br className="block sm:hidden" />
            conflict between
          </p>
        </>
      )}
      <div className="flex flex-col sm:flex-row sm:justify-center  sm:gap-x-8  sm:flex-wrap sm:w-[1200px]">
        <ProductBox
          source="featured-1.jpg"
          title="Graphic Design"
          category="English Department"
          price="6.48"
          oldPrice="16.48"
        />
        <ProductBox
          source="featured-2.jpg"
          title="Graphic Design"
          category="English Department"
          price="6.48"
          oldPrice="16.48"
        />
        <ProductBox
          source="featured-3.jpg"
          title="Graphic Design"
          category="English Department"
          price="6.48"
          oldPrice="16.48"
        />
        <ProductBox
          source="featured-4.jpg"
          title="Graphic Design"
          category="English Department"
          price="6.48"
          oldPrice="16.48"
        />
        <ProductBox
          source="featured-5.jpg"
          title="Graphic Design"
          category="English Department"
          price="6.48"
          oldPrice="16.48"
        />
        <ProductBox
          source="featured-6.jpg"
          title="Graphic Design"
          category="English Department"
          price="6.48"
          oldPrice="16.48"
        />
        <ProductBox
          source="featured-6.jpg"
          title="Graphic Design"
          category="English Department"
          price="6.48"
          oldPrice="16.48"
        />
        <ProductBox
          source="featured-7.jpg"
          title="Graphic Design"
          category="English Department"
          price="6.48"
          oldPrice="16.48"
        />
      </div>
    </div>
  );
}
