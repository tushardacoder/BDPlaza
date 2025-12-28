
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUserAlt } from 'react-icons/fa'; // Font Awesome
import { MdSell, MdLoyalty } from 'react-icons/md'; // Material Design
import { FaStore } from 'react-icons/fa';

export default function Header() {

    return (
        <header className="w-full sticky top-0 z-50 border-b bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16 gap-4">

                    {/* Logo */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <img
                            src="https://i.postimg.cc/q7sHS6tL/multi-vendor-e-com.jpg"
                            alt="BD Plaza"
                            className="h-8 w-auto"
                        />
                        {/* <span className="font-bold text-blue-600 text-lg hidden sm:block">
                            BDPLAZA
                        </span> */}
                    </div>

                    {/* Search */}
                    <div className="flex-1 max-w-2xl">
                        <div className="relative w-full max-w-md">
                            {/* Search icon on the left */}
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-200" />

                            {/* Input field */}
                            <input
                                type="text"
                                placeholder="Search for products, brands and more..."
                                className="w-full h-10 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">

                        <button className="flex items-center gap-2 px-4 h-10 rounded-md bg-blue-600 text-white text-sm font-medium  hover:bg-blue-700 hover:scale-105 transition-all duration-200">
                            <FaStore className="w-5 h-5 text-white" />
                            {/* Shop icon */}
                            Sell
                        </button>

                        <button className="relative flex items-center gap-2 px-4 h-10 rounded-md bg-blue-600 text-white text-sm font-medium  hover:bg-blue-700 hover:scale-105 transition-all duration-200">
                            <FaShoppingCart className="w-5 h-5 text-white" /> {/* Cart icon */}
                            Cart
                            <span className="absolute -top-1 -right-1 h-5 w-5 text-xs rounded-full bg-red-500 text-white flex items-center justify-center">
                                1
                            </span>
                        </button>

                        <button className="relative flex items-center gap-2 px-4 h-10 rounded-md bg-orange-500 text-white text-sm font-medium  hover:bg-orange-500 hover:scale-105 transition-all duration-200">
                            <MdLoyalty className="w-5 h-5 text-white" /> {/* Points icon */}
                            Points
                            <span className="absolute -top-1 -right-1 h-5 w-5 text-xs rounded-full bg-black text-white flex items-center justify-center">
                                4
                            </span>
                        </button>

                        <button className="flex items-center gap-2 px-4 h-10 rounded-md bg-blue-600 text-white text-sm font-medium  hover:bg-blue-700 hover:scale-105 transition-all duration-200">
                            <FaUserAlt className="w-5 h-5 text-white" /> {/* Sign In icon */}
                            Sign In
                        </button>

                    </div>
                </div>
            </div>
        </header>
    );



}