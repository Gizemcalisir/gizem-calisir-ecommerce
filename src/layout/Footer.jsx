import React from "react";
import FooterLinks from "../components/common/FooterLinks";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="sm:px-40">
      <div className="bg-[#FAFAFA] p-10 sm:flex sm:justify-between sm:items-center">
        <h3 className="flex text-2xl text-[#252B42] font-bold ">Bandage</h3>
        <div className="flex gap-6 mt-8">
          <Facebook color="#23A6F0" />
          <Instagram color="#23A6F0" />
          <Twitter color="#23A6F0" />
        </div>
      </div>
      <div className="flex flex-col gap-10 bg-white px-10 mt-10 sm:flex-row sm:justify-between">
        <FooterLinks
          title="Company Name"
          subTitle={["About Us", "Carrier", "We are hiring", "Blog"]}
        />
        <FooterLinks
          title="Legal"
          subTitle={["About Us", "Carrier", "We are hiring", "Blog"]}
        />
        <FooterLinks
          title="Features"
          subTitle={["About Us", "Carrier", "We are hiring", "Blog"]}
        />
        <FooterLinks
          title="Resource"
          subTitle={["About Us", "Carrier", "We are hiring", "Blog"]}
        />
        <div className="">
          <h5 className="text-2xl text-[#252B42] font-bold">Get In Touch</h5>
          <div className="mt-4">
            <input
              placeholder="Your Email"
              className="text-[#737373] text-sm border pl-2 py-2 font-semibold border-r-0 rounded-tl-md rounded-bl-md "
            />
            <button className="bg-[#23A6F0] text-sm text-white rounded-tr-md rounded-br-md py-2 px-2">
              Subscribe
            </button>
          </div>
          <p className="text-xs font-semibold text-[#737373]">
            Lore imp sum dolor Amit
          </p>
        </div>
      </div>

      <h6 className="bg-[#FAFAFA] text-[#737373] text-center font-bold from-neutral-400 text-sm py-10 px-16 ">
        Made With Love By Finland All Right Reserved{" "}
      </h6>
    </footer>
  );
}
