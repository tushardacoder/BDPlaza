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

const hoverColors = [
    "from-sky-100 to-blue-100",
    "from-indigo-100 to-violet-100",
    "from-emerald-100 to-teal-100",
    "from-rose-100 to-pink-100",
    "from-amber-100 to-orange-100",
    "from-cyan-100 to-sky-100",
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

            {/* p.. */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-6">
                {categories.map((cat) => {
                    const Icon = cat.icon;

                    // random gradient per card
                    const randomColor =
                        hoverColors[Math.floor(Math.random() * hoverColors.length)];

                    return (
                        <Link
                            key={cat.id}
                            to={cat.path}
                            className={`
          group relative rounded-2xl p-6  bg-white
          transition-all duration-300 ease-out
          hover:shadow-sm
          hover:bg-gradient-to-br ${randomColor}
        `}
                        >
                            {/* box outline effect */}
                            <span
                                className="
            pointer-events-none absolute inset-0 rounded-2xl
            ring-1 ring-transparent
            group-hover:ring-gray-200
            transition
          "
                            />

                            {/* top-left dots */}
                            <div className="absolute top-3 left-3 flex gap-1 opacity-0 group-hover:opacity-100 transition">
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                            </div>

                            {/* bottom-right arrow */}
                            <span className="absolute bottom-4 right-4 opacity-0 translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition text-gray-600">
                                →
                            </span>

                            {/* content */}
                            <div className="relative z-10 flex flex-col items-center gap-4 group">
                                <div className="w-14 h-14 flex items-center justify-center rounded-xl border bg-white text-xl
                  transform transition-all duration-300 ease-in
                  group-hover:scale-110 group-hover:translate-x-2 group-hover:translate-y-2">
                                    <Icon />
                                </div>


                                <span className="text-sm font-semibold text-gray-900">
                                    {cat.name}
                                </span>
                            </div>

                        </Link>
                    );
                })}
            </div>


        </section>
    );






}