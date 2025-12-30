import { Link } from "react-router";
 import { useEffect, useState } from "react";
import { FaHeart, FaEye } from "react-icons/fa"

export default function Firefightingproduct() {
   const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/fireproduct.JSON")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
       
       <h2 className="text-2xl font-bold flex items-center gap-2">
  <span className="relative inline-block">
    Firefighting
    <span className="absolute left-0 bottom-[-6px] w-3/4 h-[4px] bg-green-500"></span>
  </span>
  <span>Accessories</span>
  <span className="text-green-600">Products</span>
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
      className="
        group relative bg-white border rounded-lg p-4
        transition-all duration-300
        hover:shadow-xl hover:-translate-y-1 hover:z-20
      "
    >
      {/* DISCOUNT */}
      {product.discount && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
          {product.discount}
        </span>
      )}

      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="
            w-full h-32 object-contain mb-4
            transition-transform duration-300
            group-hover:scale-110
          "
        />

        {/* HOVER ICON BOX */}
        <div
          className="
            absolute top-3 right-3 flex flex-col gap-2
            opacity-0 translate-x-3
            group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-300
          "
        >
          <button
            className="
              w-9 h-9 bg-white rounded-md shadow
              flex items-center justify-center
              text-gray-600 hover:text-red-500
              hover:bg-gray-100 transition
            "
          >
            <FaHeart size={14} />
          </button>

          <button
            className="
              w-9 h-9 bg-white rounded-md shadow
              flex items-center justify-center
              text-gray-600 hover:text-blue-500
              hover:bg-gray-100 transition
            "
          >
            <FaEye size={14} />
          </button>
        </div>
      </div>

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
        className="
          block mt-4 text-center text-sm py-2 rounded-md text-white
          bg-gradient-to-r from-blue-500 to-purple-500
          hover:opacity-90 transition
        "
      >
        View Details
      </Link>
    </div>
  ))}
</div>
    </section>


      
  );
}
