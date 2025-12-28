import { useState } from "react";

/* Main Page Component */
export default function Info() {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <section className="bg-[#f6fbf7] min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-20 text-center">

                {/* Heading */}
                <h1 className="text-4xl font-bold text-gray-900 mb-3 ">
                    What is <span className="text-green-600">BD Plaza</span>?
                </h1>
                <p className="text-gray-600 mb-12">
                    Everything you need to know about Bangladesh&apos;s trusted e-marketplace
                </p>

                {/* Accordion */}
                <div className="space-y-6 text-left">

                    {/* Item 1 */}
                    <div
                        className="bg-white rounded-xl shadow-md p-5 cursor-pointer 
                transform transition-all duration-300 hover:shadow-xl  hover:bg-gray-50"
                        onClick={() => toggle(0)}
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3 text-lg font-semibold">
                                <span className="text-xl">🏪</span>
                                <span>E-Marketplace</span>
                            </div>
                            <span
                                className={`text-green-600 transition-transform ${open === 0 ? "rotate-180" : ""
                                    }`}
                            >
                                <svg
                                    className={`w-5 h-5 text-green-600 transition-transform duration-300 ${open === 0 ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>

                            </span>
                        </div>

                        {open === 0 && (
                            <p className="mt-4 text-gray-600 leading-relaxed sm:text-justify ml-9 lg:text-right ">
                                BD Plaza is a digital marketplace connecting buyers & sellers
                                across Bangladesh in one trusted platform.
                            </p>
                        )}
                    </div>

                    {/* Item 2 */}
                    <div
                        className="bg-white rounded-xl shadow-md p-5 cursor-pointer 
                transform transition-all duration-300 hover:shadow-xl  hover:bg-gray-50"
                        onClick={() => toggle(1)}
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3 text-lg font-semibold">
                                <span className="text-xl">🛍️</span>
                                <span>Buyers</span>
                            </div>
                            <span
                                className={`text-green-600 transition-transform ${open === 1 ? "rotate-180" : ""
                                    }`}
                            >
                                <svg
                                    className={`w-5 h-5 text-green-600 transition-transform duration-300 ${open === 0 ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>

                            </span>
                        </div>

                        {open === 1 && (
                            <p className="mt-4 text-gray-600 leading-relaxed sm:text-justify ml-9 lg:text-right">
                                Buyers can explore verified products, compare   prices and joy
                                safe and convenient shopping experience.
                            </p>
                        )}
                    </div>

                    {/* Item 3 */}
                    <div
                        className="bg-white rounded-xl shadow-md p-5 cursor-pointer 
                transform transition-all duration-300 hover:shadow-xl  hover:bg-gray-50"
                        onClick={() => toggle(2)}
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3 text-lg font-semibold">
                                <span className="text-xl">💼</span>
                                <span>Sellers</span>
                            </div>
                            <span
                                className={`text-green-600 transition-transform ${open === 2 ? "rotate-180" : ""
                                    }`}
                            >
                                <svg
                                    className={`w-5 h-5 text-green-600 transition-transform duration-300 ${open === 0 ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>

                            </span>
                        </div>

                        {open === 2 && (
                            <p className="mt-4 text-gray-600 leading-relaxed  sm:text-justify ml-9 lg:text-right  ">
                                Sellers can list products, reach more customers, and manage their
                                business efficiently through BD Plaza.
                            </p>
                        )}
                    </div>

                </div>

                {/* Support */}
                <div className="mt-16">
                    <p className="text-gray-600 mb-4">Still have questions?</p>
                    <button className="bg-green-600  text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-green-700 hover:scale-105">
                        Contact Support
                    </button>
                </div>

            </div>
        </section>
    );
}
