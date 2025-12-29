import {
    FaLaptop,
    FaMicrochip,
    FaShieldAlt,
    FaPlane,
    FaHeartbeat,
    FaCar,
    FaCouch,
    FaBuilding,
    FaBook,
} from "react-icons/fa";

import { Link } from "react-router";

import { FaArrowRight } from "react-icons/fa";


const categories = [
    {
        id: 1,
        name: "Computers",
        icon: FaLaptop,
        path: "/category/computers",
    },
    {
        id: 2,
        name: "Electronics",
        icon: FaMicrochip,
        path: "/category/electronics",
    },
    {
        id: 3,
        name: "Security",
        icon: FaShieldAlt,
        path: "/category/security",
        highlight: true,
    },
    {
        id: 4,
        name: "Travel",
        icon: FaPlane,
        path: "/category/travel",
    },
    {
        id: 5,
        name: "Health",
        icon: FaHeartbeat,
        path: "/category/health",
    },
    {
        id: 6,
        name: "Car & Bike",
        icon: FaCar,
        path: "/category/car-bike",
    },
    {
        id: 7,
        name: "Furniture",
        icon: FaCouch,
        path: "/category/furniture",
    },
    {
        id: 8,
        name: "Real Estate",
        icon: FaBuilding,
        path: "/category/real-estate",
    },
    {
        id: 9,
        name: "Books",
        icon: FaBook,
        path: "/category/books",
        highlight: true,
    },
];

export default function Popularcategories() {

    return (
        <section className="max-w-7xl mx-auto px-6 py-14">
            {/* HEADER */}
            <div className="flex items-center justify-between mb-10">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                        ✨ Popular Categories
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                        Explore our trending collections
                    </p>
                </div>

                <Link
                    to="/categories"
                    className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"
                >
                    View All <FaArrowRight className="text-xs" />
                </Link>
            </div>

            {/* CATEGORY GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-6">
                {categories.map((cat) => {
                    const Icon = cat.icon;

                    return (
                        <Link
                            key={cat.id}
                            to={cat.path}
                            className="group bg-white rounded-2xl p-6 flex flex-col items-center gap-4 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div
                                className={`w-14 h-14 flex items-center justify-center rounded-xl border text-xl
                ${cat.highlight
                                        ? "text-emerald-500 border-emerald-200"
                                        : "text-gray-700 border-gray-200"
                                    }
                group-hover:bg-gray-50`}
                            >
                                <Icon />
                            </div>

                            <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition">
                                {cat.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </section>
    );






}