import React, { useState } from "react";
import {
  User,
  Search,
  ShoppingCart,
  Menu,
  Heart,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white shadow p-4">
      <div className="hidden sm:flex justify-between items-center bg-[#252B42] px-6 py-2 text-white text-sm">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>

        {/* Ortadaki Metin */}
        <div>Follow Us and get a chance to win 80% off</div>

        {/* Sağ Sosyal Medya */}
        <div className="flex items-center gap-4">
          <span>Follow Us :</span>
          <div className="flex gap-4">
            <Instagram color="white" size={18} />
            <Youtube color="white" size={18} />
            <Facebook color="white" size={18} />
            <Twitter color="white" size={18} />
          </div>
        </div>
      </div>

      {/* Ana Menü */}
      <div className="flex justify-between items-center mt-4 relative">
        <div className="font-montserrat text-[20px] font-bold text-[#252B42]">
          Bandage
        </div>

        <div className="hidden sm:flex sm:gap-4">
          <a onClick={() => navigate("/")} className="text-[#737373]">
            Home
          </a>

          {/* Shop Dropdown */}
          <div className="relative">
            <div className="flex items-center gap-1 text-[#737373] font-semibold">
              {/* Shop yazısı tıklanınca yönlendir */}
              <span
                onClick={() => navigate("/shop")}
                className="cursor-pointer"
              >
                Shop
              </span>

              {/* Ok ikonuna tıklanınca dropdown aç/kapat */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="p-1"
              >
                <ChevronDown size={16} />
              </button>
            </div>

            {isDropdownOpen && (
              <div className="absolute top-full mt-2 w-[420px] bg-white shadow-lg rounded p-4 z-50 flex gap-8">
                {/* Kadın Sütunu */}
                <div className="w-1/2">
                  <p className="font-semibold text-gray-800 mb-2">Kadın</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      <a
                        href="#"
                        className="hover:text-black block px-2 py-1 rounded"
                      >
                        Bags
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-black block px-2 py-1 rounded"
                      >
                        Belts
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-black block px-2 py-1 rounded"
                      >
                        Cosmetics
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-black block px-2 py-1 rounded"
                      >
                        Bags
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-black block px-2 py-1 rounded"
                      >
                        Hats
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="w-1/2">
                  <p className="font-semibold text-gray-800 mb-2">Erkek</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      <a
                        href="#"
                        className="hover:text-black block px-2 py-1 rounded"
                      >
                        Bags
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-black block px-2 py-1 rounded"
                      >
                        Belts
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-black block px-2 py-1 rounded"
                      >
                        Cosmetics
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-black block px-2 py-1 rounded"
                      >
                        Bags
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-black block px-2 py-1 rounded"
                      >
                        Hats
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <a href="#" className="text-[#737373] font-semibold">
            About
          </a>
          <a href="#" className="text-[#737373] font-semibold">
            Blog
          </a>
          <a href="#" className="text-[#737373] font-semibold">
            Contact
          </a>
          <a href="#" className="text-[#737373] font-semibold">
            Pages
          </a>
        </div>

        <div className="flex gap-6 items-center">
          <a className="flex gap-1 items-center" href="">
            <User className="sm:text-blue-500" size={18} />
            <span className="text-blue-500 hidden sm:block">
              Login / Register
            </span>
          </a>
          <Search className="sm:text-blue-500" size={18} />
          <a className="flex gap-2 items-center">
            <ShoppingCart className="sm:text-blue-500" size={18} />
            <span className="hidden sm:inline sm:text-blue-500">1</span>
          </a>
          <Menu className="sm:hidden" size={18} />
          <a className="flex gap-2 items-center">
            <Heart className="hidden sm:block sm:text-blue-500" size={18} />
            <span className="hidden sm:inline sm:text-blue-500">1</span>
          </a>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-[30px] text-[#252B42] font-montserrat w-auto sm:hidden">
        <a href="" onClick={() => navigate("/")} className="text-[#737373]">
          Home
        </a>
        <a
          href=""
          onClick={() => navigate("/shop")}
          className="text-[#737373] font-semibold"
        >
          Shop
        </a>
        <a href="#" className="text-[#737373] font-semibold">
          Product
        </a>
        <a href="#" className="text-[#737373] font-semibold">
          Pricing
        </a>
        <a href="#" className="text-[#737373] font-semibold">
          Contact
        </a>
      </div>
    </header>
  );
}
