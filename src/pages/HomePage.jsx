import React from "react";
import ProductCart from "../components/ProductCart";
import FeaturedProducts from "../components/FeaturedProducts";
import FluidContainer from "../components/FluidContainer";
import FeaturedPosts from "../components/FeaturedPosts";

export default function HomePage() {
  return (
    <div>
      <ProductCart />
      <FeaturedProducts />
      <FluidContainer />
      <FeaturedPosts />
    </div>
  );
}
