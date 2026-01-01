import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUserAlt,
  FaStore,
  FaTag,
  FaBoxOpen,
  FaStar,
} from "react-icons/fa";
import { MdLoyalty } from "react-icons/md";

export default function Header() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const Dropdown = () => {
    if (!open || !inputRef.current) return null;
    const rect = inputRef.current.getBoundingClientRect();

    return createPortal(
      <div
        style={{
          position: "fixed",
          top: rect.bottom + 8,
          left: rect.left,
          width: rect.width,
          zIndex: 99999,
        }}
        className="bg-white border rounded-md shadow-xl"
      >
        <div className="p-4 text-center">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">
            ✨ Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-center gap-2 hover:text-blue-600 cursor-pointer font-bold">
              <FaTag /> Today’s Deals
            </li>
            <li className="flex justify-center gap-2 hover:text-blue-600 cursor-pointer  font-bold">
              <FaBoxOpen /> New Arrivals
            </li>
            <li className="flex justify-center gap-2 hover:text-blue-600 cursor-pointer  font-bold">
              <FaStar /> Best Sellers
            </li>
          </ul>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* WRAPPER */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-4 py-2">

            {/* LOGO (always first) */}
            <img
              src="https://i.postimg.cc/q7sHS6tL/multi-vendor-e-com.jpg"
              alt="BD Plaza"
              className="h-8 sm:h-10 shrink-0 order-1"
            />

            {/* SEARCH
                - Next line on small screens
                - After logo on md & lg */}
            <div className="w-full md:flex-1 order-3 md:order-2 relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                ref={inputRef}
                type="text"
                onFocus={() => setOpen(true)}
                placeholder="Search for products, brands and more..."
                className="
                  w-full h-9 sm:h-10 md:h-11
                  pl-9 pr-4
                  rounded-lg border bg-white
                  text-sm sm:text-base
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  placeholder:text-gray-400
                "
              />
            </div>

            {/* ACTIONS (Desktop) */}
            <div className="hidden lg:flex items-center gap-3 order-3">
              <button className="flex items-center gap-2 px-4 h-10 bg-blue-600 text-white rounded-md">
                <FaStore /> Sell
              </button>

              <button className="relative flex items-center gap-2 px-4 h-10 bg-blue-600 text-white rounded-md">
                <FaShoppingCart /> Cart
                <span className="absolute -top-1 -right-1 h-5 w-5 text-xs bg-red-500 rounded-full flex items-center justify-center">
                  1
                </span>
              </button>

              <button className="relative flex items-center gap-2 px-4 h-10 bg-orange-500 text-white rounded-md">
                <MdLoyalty /> Points
                <span className="absolute -top-1 -right-1 h-5 w-5 text-xs bg-black rounded-full flex items-center justify-center">
                  4
                </span>
              </button>

              <button className="flex items-center gap-2 px-4 h-10 bg-blue-600 text-white rounded-md">
                <FaUserAlt /> Sign In
              </button>
            </div>

            {/* ACTIONS (Mobile) */}
            <div className="flex lg:hidden items-center gap-2 ml-auto order-2">
              <button className="relative w-9 h-9 bg-blue-600 text-white rounded-md flex items-center justify-center">
                <FaShoppingCart />
                <span className="absolute -top-1 -right-1 h-4 w-4 text-xs bg-red-500 rounded-full flex items-center justify-center">
                  1
                </span>
              </button>

              <button className="relative w-9 h-9 bg-orange-500 text-white rounded-md flex items-center justify-center">
                <MdLoyalty />
                <span className="absolute -top-1 -right-1 h-4 w-4 text-xs bg-black rounded-full flex items-center justify-center">
                  4
                </span>
              </button>

              <button className="w-9 h-9 bg-blue-600 text-white rounded-md flex items-center justify-center">
                <FaUserAlt />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* SEARCH DROPDOWN */}
      <Dropdown />
    </>
  );
}
