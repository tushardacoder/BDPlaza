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

    // Close dropdown on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    // 🔥 Portal Dropdown (inside same file)
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
                }}
                className="bg-white border rounded-md shadow-xl z-[99999]"
            >
                <div className="p-4 text-center">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                        ✨ Quick Links
                    </h4>

                    <ul className="space-y-3  ">
                        
                        <li className="flex items-center justify-center gap-3 cursor-pointer hover:text-blue-600">
                             <FaTag />
                            <span>Today's Deals</span>
                            
                        </li>

                        <li className="flex items-center justify-center gap-3 cursor-pointer hover:text-blue-600">
                         
                              <FaBoxOpen className="text-black" />
                               <span>New Arrivals</span>
                        </li>

                        <li className="flex items-center justify-center gap-3 cursor-pointer hover:text-blue-600">
                           
                            <FaStar className="text-black" />
                             <span>Best Sellers</span>
                        </li>
                    </ul>

                </div>
            </div>,
            document.body
        );
    };

    return (
        <>
            <header className="w-full sticky top-0 z-50 border-b bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16 gap-4">

                        {/* Logo */}
                        <img
                            src="https://i.postimg.cc/q7sHS6tL/multi-vendor-e-com.jpg"
                            alt="BD Plaza"
                            className="h-8"
                        />

                        {/* Search */}
                        <div className="flex-1 max-w-md relative">
                          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600" />

                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search for products, brands and more..."
                                className="w-full  
      h-8
      pl-12
      pr-4
      rounded-lg
      border
      border-black-100
      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
      focus:border-blue-500
      text-sm"
                                onFocus={() => setOpen(true)}
                            />
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 px-4 h-10 bg-blue-600 text-white rounded-md hover:scale-105 transition">
                                <FaStore /> Sell
                            </button>

                            <button className="relative flex items-center gap-2 px-4 h-10 bg-blue-600 text-white rounded-md hover:scale-105 transition">
                                <FaShoppingCart /> Cart
                                <span className="absolute -top-1 -right-1 h-5 w-5 text-xs bg-red-500 rounded-full flex items-center justify-center">
                                    1
                                </span>
                            </button>

                            <button className="relative flex items-center gap-2 px-4 h-10 bg-orange-500 text-white rounded-md hover:scale-105 transition">
                                <MdLoyalty /> Points
                                <span className="absolute -top-1 -right-1 h-5 w-5 text-xs bg-black rounded-full flex items-center justify-center">
                                    4
                                </span>
                            </button>

                            <button className="flex items-center gap-2 px-4 h-10 bg-blue-600 text-white rounded-md hover:scale-105 transition">
                                <FaUserAlt /> Sign In
                            </button>
                        </div>

                    </div>
                </div>
            </header>

            {/* 🔥 PORTAL DROPDOWN */}
            <Dropdown />
        </>
    );
}
