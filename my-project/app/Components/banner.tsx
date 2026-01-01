import { useState, useEffect } from "react";

const sliderData = [
  {
    id: 1,
    image: "https://i.postimg.cc/0jtm9N4b/Ecommerce-Banner-1.png",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/jjz7Lc1Z/Ecommerce-banner-2.png",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto change slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === sliderData.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? sliderData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === sliderData.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-[90%] md:w-[85%] h-[300px] md:h-[400px] overflow-hidden bg-white flex flex-col items-center justify-center group">
        {/* Main Slider */}
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Left Arrow - appear on hover */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 shadow-md p-3 rounded-full transition opacity-0 group-hover:opacity-100"
            >
              ‹
            </button>

            {/* Right Arrow - appear on hover */}
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 shadow-md p-3 rounded-full transition opacity-0 group-hover:opacity-100"
            >
              ›
            </button>
          </div>
        ))}

        {/* Thumbnails */}
       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 
                max-w-full overflow-x-auto px-3">
  {sliderData.map((slide, index) => (
    <img
      key={slide.id}
      src={slide.image}
      alt={`Slide ${index + 1}`}
      onClick={() => goToSlide(index)}
      className={`w-14 h-9 sm:w-16 sm:h-10 md:w-20 md:h-12 
                  object-cover rounded cursor-pointer border-2 
                  transition-all duration-300
        ${current === index ? "border-red-500 scale-105" : "border-transparent"}
        hover:border-red-500`}
    />
  ))}
</div>

      </div>
    </div>
  );
};

export default HeroSlider;
