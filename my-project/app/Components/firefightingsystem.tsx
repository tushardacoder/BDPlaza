import { Link } from "react-router";
 const products = [
  {
    id: 1,
    name: "Evaporative Cooler 36,000m3/hr model",
    price: 6000,
    image: "https://i.postimg.cc/MTjHZ8sH/ntezqlt7tz4s9ltxrxdm.jpg",
  },
  {
    id: 2,
    name: "Evaporative Cooler 30,000m3/hr model",
    price: 6000,
    image: "https://i.postimg.cc/g0L6M7Cn/gvgfh8m9wj2ztuxi20g0.jpg",
  },
  {
    id: 3,
    name: "Evaporative Cooler 25,000m3/hr model",
    price: 7000,
    image: "https://i.postimg.cc/zD73k5yn/yw4jwd74knresudvyogb.jpg",
  },
  {
    id: 4,
    name: "Evaporative Cooler 18,000m3/hr model",
    price: 5000,
    image: "https://i.postimg.cc/SsqNWtq1/wo5pfob898svx7v3tr21.jpg",
  },
  {
    id: 5,
    name: "exhaust fan size 24 inch Inche",
    price: 3000,
    image: "https://i.postimg.cc/MK46sGzk/bwzmej8uegje5vcaqmsz.jpg",
  },
  {
    id: 6,
    name: "exhaust fan size 28 inch Inche",
    price: 3600,
    image: "https://i.postimg.cc/zB05Tzxy/dt80afmg93rc6cpqqife.jpg",
  },
  {
    id: 7,
    name: "exhaust fan size 30 inch Inche",
    price: 3600,
    image: "https://i.postimg.cc/dVrY4mWq/yxzy3r630fwegwcg188u.jpg",
  },
  {
    id: 8,
    name: "exhaust fan size 32 inch Inche",
    price: 4000,
    image: "https://i.postimg.cc/15gPNZwG/iziudytzod2guqd3peqw.jpg",
  },
];


export default function Firefightingsystem() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">
         <span className="underline ">Firefighting System </span> <span className="text-green-600 underline-offset-4">Products</span>
        </h2>

        <Link
          to="/products"
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md text-sm font-medium transition"
        >
          View All Products →
        </Link>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white border rounded-lg p-4 hover:shadow-lg transition"
          >
            {/* DISCOUNT */}
            {product.discount && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </span>
            )}

            {/* IMAGE */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-contain mb-4"
            />

            {/* NAME */}
            <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
              {product.name}
            </h3>

            {/* PRICE */}
            <div className="mt-2">
              <span className="text-green-600 font-semibold">
                ৳ {product.price}
              </span>

              {product.oldPrice && (
                <span className="ml-2 text-sm text-gray-400 line-through">
                  ৳ {product.oldPrice}
                </span>
              )}
            </div>

            {/* BUTTON */}
            <Link
              to={`/product/${product.id}`}
              className="block mt-4 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm py-2 rounded-md hover:opacity-90 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
