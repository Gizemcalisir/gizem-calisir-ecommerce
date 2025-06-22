import React from "react";

const brands = [
  { logo: "hooli.png" },
  { logo: "lya.png" },
  { logo: "fa.png" },
  { logo: "stripe.png" },
  { logo: "aws.png" },
  { logo: "vector.png" },
];

export default function Brands() {
  return (
    <section className="flex justify-center py-16 bg-gray-50 ">
      <div className="flex flex-col gap-16 px-4 sm:flex-row">
        {brands.map((brand) => (
          <img
            src={brand.logo}
            className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
}
