import { useState } from "react";

/* MENU DATA */
const menuItems = [
  {
    title: "Firefighting Accessories",
    items: ["Fire Accessisories"],
  },
  {
    title: "Ventilation",
    items: ["Natural Ventilation", "Force Ventilation", "Exhaust Fan", "Industrial Blower"],
  },
  {
    title: "Firefighting System",
    items: ["Sprinkler System", "Hydrant System", "Foam System"],
  },
  {
    title: "Firefighting Extinguisher",
    items: ["CO₂", "Dry Powder", "Water", "Foam"],
  },
  {
    title: "Fire Protection",
    items: ["Fire Door", "Fire Curtain", "Fire Sealant"],
  },
  {
    title: "Firefighting Detection",
    items: ["Smoke Detector", "Heat Detector", "Gas Detector"],
  },
];

export default function Nav() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="w-full flex justify-center">
        <ul className="flex items-center gap-8 h-12 text-white text-sm font-medium">
          {menuItems.map((menu, index) => (
            <li key={index} className="relative flex items-center">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex items-center justify-center gap-1 h-12 px-1 hover:text-gray-200 transition"
              >
                {menu.title}
                <Arrow open={open === index} />
              </button>

              {/* DROPDOWN */}
              {open === index && (
                <div className="absolute left-1/2 top-full mt-1 -translate-x-1/2 w-64 bg-white text-gray-800 rounded-md shadow-lg border z-50">
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
