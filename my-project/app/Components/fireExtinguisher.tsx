import { Link } from "react-router";
 const products = [
  {
    id: 1,
    name: "ABC Foam 25 kg",
    price: 6000,
    image: "https://i.postimg.cc/MTjNpzhB/vhb73vnq97gwl7shu8cb.webp",
  },
  {
    id: 2,
    name: "ABC Foam 10 kg",
    price: 6000,
    image: "https://i.postimg.cc/MTjNpzhB/vhb73vnq97gwl7shu8cb.webp",
  },
  {
    id: 3,
    name: "ABC Foam 6 kg",
    price: 5000,
    image: "https://i.postimg.cc/QMgWG7Ms/kbahp795nkvlylsrx7ub.jpg",
  },
  {
    id: 4,
    name: "ABC Foam 5 kg",
    price: 4000,
    
    image: "https://i.postimg.cc/c4Kg12Jm/cj856fmtpfdwpy1acbo3.webp",
  },
  {
    id: 5,
    name: "ABC Foam 3 kg",
    price: 2000,
    image: "https://i.postimg.cc/Gmw2LpVG/xhsndefeurexsx7l2yhk.avif",
  },
  {
    id: 6,
    name: "co2 gas 25 kg",
    price: 5000,
    image: "https://i.postimg.cc/SxhMZVyc/qekyaoqyiatknlkzcgdh.webp",
  },
  {
    id: 7,
    name: "co2 gas 10 kg",
    price: 4000,
    image: "https://i.postimg.cc/DfSLm8js/pebkshwyqdw2akbzcmwu.jpg",
  },
  {
    id: 8,
    name: "co2 gas 6 kg",
    price: 3999.99,
    image: "https://i.postimg.cc/SxhMZVyc/qekyaoqyiatknlkzcgdh.webp",
  },
];


export default function FireExtinguisher() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">
         <span className="underline ">Firefighting Extinguisher </span> <span className="text-green-600 underline-offset-4">Products</span>
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
