import { Link } from "react-router";
import {
  FaTruck,
  FaShieldAlt,
  FaUndo,
  FaHeart,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { FiMail } from "react-icons/fi";


export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#020617] text-gray-300 ">
      {/* TOP FEATURES */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {[
          {
            icon: <FaTruck />,
            title: "Free Shipping",
            desc: "On orders over $50",
          },
          {
            icon: <FaShieldAlt />,
            title: "Secure Payment",
            desc: "100% Protected",
          },
          {
            icon: <FaUndo />,
            title: "Easy Returns",
            desc: "30 Day Guarantee",
          },
          {
            icon: <FaHeart />,
            title: "24/7 Support",
            desc: "Always Here to Help",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-white/5 rounded-xl p-5 border border-white/10"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xl">
              {item.icon}
            </div>
            <div>
              <h4 className="font-semibold text-white">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
        
      </div>
      <hr className="my-8 w-full max-w-9xl mx-auto border-t border-white/20" />

     


      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">BDPlaza</h2>
          <p className="text-sm text-gray-400 mb-6">
            Your trusted marketplace for quality products. Shop with confidence
            and enjoy seamless shopping experience with us.
          </p>

          <h4 className="text-white font-semibold mb-3">
            Subscribe to Newsletter
          </h4>
         <div className="flex w-full max-w-7xl mx-auto mt-10 items-center gap-4">
  {/* Input with email icon */}
  <div className="relative flex-1">
    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" size={20} />
    <input
      type="email"
      placeholder="Enter your email"
      className=" px-15  py-3 text-lg bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  {/* Share button */}
  <button className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md text-white gap-2 hover:scale-105 transition-transform duration-200">
    Share <FiShare size={24} />
  </button>
</div>

          <div className="mt-6 space-y-2 text-sm">
            <p>📞 +880 123-456-7890</p>
            <p>✉️ support@BDPlaza.com</p>
            <p>📍 Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* SHOPPING */}
        <div>
          <h4 className="text-white font-semibold mb-4 underline decoration-blue-500">
            Shopping
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/stalls" className="hover:text-white">Stall List</Link></li>
            <li><Link to="/mall" className="hover:text-white">Shopping Mall</Link></li>
            <li><Link to="/brands" className="hover:text-white">Brand</Link></li>
            <li><Link to="/new" className="hover:text-white">New Arrivals</Link></li>
            <li><Link to="/best-sellers" className="hover:text-white">Best Sellers</Link></li>
          </ul>
        </div>

        {/* KNOWLEDGE BASE */}
        <div>
          <h4 className="text-white font-semibold mb-4 underline decoration-blue-500">
            Knowledge Base
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/how-to-buy" className="hover:text-white">How to Buy</Link></li>
            <li><Link to="/shipping" className="hover:text-white">Shipping Info</Link></li>
          </ul>
        </div>

        {/* INFORMATION */}
        <div>
          <h4 className="text-white font-semibold mb-4 underline decoration-blue-500">
            Information
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/sell" className="hover:text-white">Sell on BDPlaza</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/returns" className="hover:text-white">Return Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>
            © 2025 BDPlaza. All rights reserved. Made with ❤️ in Bangladesh
          </p>

          <div className="flex gap-3">
            {[FaFacebookF, FaInstagram, FaYoutube, FaPinterestP].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-md hover:bg-blue-500 transition"
                >
                  <Icon />
                </div>
              )
            )}
          </div>

          <div className="flex gap-2">
            {["Visa", "Mastercard", "bKash"].map((p) => (
              <span
                key={p}
                className="px-3 py-1 bg-white/10 rounded-md border border-white/10 text-xs"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
