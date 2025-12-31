import { useState } from "react";
import { FiTag, FiMenu, FiX } from "react-icons/fi";

/* MENU DATA */
const menuItems = [
  {
    title: "Firefighting Accessories",
    icon: <FiTag />,
    items: ["Fire Accessories"],
  },
  {
    title: "Ventilation",
    icon: <FiTag />,
    items: [
      "Natural Ventilation",
      "Force Ventilation",
      "Exhaust Fan",
      "Industrial Blower",
    ],
  },
  {
    title: "Firefighting System",
    icon: <FiTag />,
    items: ["Sprinkler System", "Hydrant System", "Foam System"],
  },
  {
    title: "Fire Extinguisher",
    icon: <FiTag />,
    items: ["CO₂", "Dry Powder", "Water", "Foam"],
  },
  {
    title: "Fire Protection",
    icon: <FiTag />,
    items: ["Fire Door", "Fire Curtain", "Fire Sealant"],
  },
  {
    title: "Firefighting Detection",
    icon: <FiTag />,
    items: ["Smoke Detector", "Heat Detector", "Gas Detector"],
  },
];

export default function Nav() {
  const [openDesktop, setOpenDesktop] = useState<number | null>(null);
  const [openMobile, setOpenMobile] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP BAR */}
        <div className="flex items-center justify-between lg:justify-around h-12 text-white">
          {/* LOGO */}
          

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {menuItems.map((menu, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() =>
                    setOpenDesktop(openDesktop === index ? null : index)
                  }
                  className="flex items-center gap-1 h-12 hover:text-gray-200"
                >
                  {menu.title}
                  <Arrow open={openDesktop === index} />
                </button>

                {/* DESKTOP DROPDOWN */}
                {openDesktop === index && (
                  <div className="absolute left-1/2 top-full mt-1 -translate-x-1/2 w-64 bg-white text-gray-800 rounded-md shadow-lg border z-50">
                    <div className="flex items-center gap-2 px-4 py-3 bg-blue-50 text-blue-700 font-semibold border-b">
                      {menu.icon}
                      {menu.title}
                    </div>

                    <ul className="py-2 text-sm">
                      {menu.items.map((item, i) => (
                        <li
                          key={i}
                          className="px-4 py-2 text-center hover:bg-gray-100 cursor-pointer"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t">
                      <button className="w-full py-2 text-blue-600 font-medium hover:bg-blue-50">
                        View All in {menu.title}
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* HAMBURGER (MOBILE) */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* MOBILE MENU (SLIDE-IN FROM RIGHT) */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <span className="font-bold text-gray-800">Menu</span>
            <button
              className="text-2xl text-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              <FiX />
            </button>
          </div>

          <div className="overflow-y-auto h-full">
            {menuItems.map((menu, index) => (
              <div key={index} className="border-b last:border-none">
                <button
                  onClick={() =>
                    setOpenMobile(openMobile === index ? null : index)
                  }
                  className="w-full flex items-center justify-between px-4 py-3 font-medium text-gray-800"
                >
                  <div className="flex items-center gap-2">
                    {menu.icon}
                    {menu.title}
                  </div>
                  <Arrow open={openMobile === index} />
                </button>

                {openMobile === index && (
                  <ul className="bg-gray-50">
                    {menu.items.map((item, i) => (
                      <li
                        key={i}
                        className="px-6 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item}
                      </li>
                    ))}
                    <li className="px-6 py-2 text-blue-600 font-medium cursor-pointer hover:bg-blue-50">
                      View All in {menu.title}
                    </li>
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ARROW ICON */
const Arrow = ({ open }: { open: boolean }) => (
  <svg
    className={`w-4 h-4 transition-transform duration-300 ${
      open ? "rotate-180" : ""
    }`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);
