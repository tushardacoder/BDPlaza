import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 relative">
        <ul className="flex items-center justify-center gap-8 h-12 text-white text-sm font-medium">

          {/* Firefighting Accessories */}
          <li className="flex items-center gap-1 cursor-pointer hover:text-gray-200">
            Firefighting Accessories
            <Arrow open={false} />
          </li>

          {/* Ventilation (Dropdown) */}
          <li className="relative">
            <button
              onClick={() => setOpen(open === 1 ? null : 1)}
              className="flex items-center gap-1 cursor-pointer hover:text-gray-200"
            >
              Ventilation
              <Arrow open={open === 1} />
            </button>

            {/* Dropdown */}
            {open === 1 && (
              <div className="absolute top-12 left-0 w-64 bg-white text-gray-800 rounded-md shadow-lg border">
                 <div className="border-t">
                  <button className="w-full py-2 text-black-600 font-medium hover:bg-blue-50">
                    Ventilation
                  </button>
                </div>
                <ul className="py-2 text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Natural Ventilation
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Force Ventilation
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Exhaust Fan
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Industrial Blower
                  </li>
                </ul>

                <div className="border-t">
                  <button className="w-full py-2 text-blue-600 font-medium hover:bg-blue-50">
                    View All in Ventilation
                  </button>
                </div>
              </div>
            )}
          </li>

          {/* Other Items */}
          <li className="flex items-center gap-1 cursor-pointer hover:text-gray-200">
            Firefighting System
            <Arrow open={false} />
          </li>

          <li className="flex items-center gap-1 cursor-pointer hover:text-gray-200">
            Firefighting Extinguisher
            <Arrow open={false} />
          </li>

          <li className="flex items-center gap-1 cursor-pointer hover:text-gray-200">
            Fire Protection
            <Arrow open={false} />
          </li>

          <li className="flex items-center gap-1 cursor-pointer hover:text-gray-200">
            Firefighting Detection
            <Arrow open={false} />
          </li>

        </ul>
      </div>
    </nav>
  );
}

/* Arrow Component */
const Arrow = ({ open }: { open: boolean }) => (
  <svg
    className={`w-5 h-5 transition-transform duration-300 ${
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
