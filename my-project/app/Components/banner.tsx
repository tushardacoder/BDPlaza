import { useState } from "react";

const slides = [
  {
    id: 1,
    image: "https://i.postimg.cc/0jtm9N4b/Ecommerce-Banner-1.png",
    link: "/personal-stall",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/jjz7Lc1Z/Ecommerce-banner-2.png",
    link: "/business-stall",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative max-w-7xl mx-auto overflow-hidden rounded-xl group">
      
      {/* MAIN BANNER */}
      <img
        src={slides[current].image}
        alt="banner"
        className="w-full h-[260px] md:h-[380px] object-cover"
      />

      {/* LEFT SLIDE (on hover) */}
      <div
        className="
          absolute top-0 left-0 h-full w-[260px]
          -translate-x-full
          group-hover:translate-x-0
          transition-transform duration-500 ease-out
        "
      >
        <img
          src={slides[0].image}
          alt="left banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT SLIDE (on hover) */}
      <div
        className="
          absolute top-0 right-0 h-full w-[260px]
          translate-x-full
          group-hover:translate-x-0
          transition-transform duration-500 ease-out
        "
      >
        <img
          src={slides[1].image}
          alt="right banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow z-20"
      >
        ❮
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow z-20"
      >
        ❯
      </button>
    </div>
  );
}
