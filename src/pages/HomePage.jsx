import React from "react";
import ProductCart from "../components/ProductCart";
import FeaturedProducts from "../components/FeaturedProducts";
import FluidContainer from "../components/FluidContainer";
import FeaturedPosts from "../components/FeaturedPosts";
import HomeSlider from "../components/HomeSlider";
import Slider from "../components/Slider";

export default function HomePage() {
  return (
    <div className="w-full mx-auto">
      <HomeSlider />
      <ProductCart />
      <FeaturedProducts />
      <Slider />
      <FluidContainer />
      <FeaturedPosts />
    </div>
  );
}
