import { Link } from "react-router";
 const products = [
  {
    id: 1,
    name: "Industrial Blower",
    price: 3000,
    image: "https://i.postimg.cc/8kq99VQr/njw2scoxeglexcqzwkac.jpg",
  },
  {
    id: 2,
    name: "exhaust fan 24 inch size",
    price: 1999.99,
    image: "https://i.postimg.cc/3rDbgby1/hgfe7ityjjmcmy2ib0cj.avif",
  },
  {
    id: 3,
    name: "exhaust fan 28 inch size",
    price: 2000,
    image: "https://i.postimg.cc/MpzPJ6sn/nz3md04o0pv4wit9tnnj.jpg",
  },
  {
    id: 4,
    name: "exhaust fan 30 inch size",
    price: 1999.99,
    
    image: "https://i.postimg.cc/T1807fL6/xvwe2krlrzvwmsdg4dyh.jpg",
  },
  {
    id: 5,
    name: "exhaust fan 32 inch size",
    price: 2799.99,
    image: "https://i.postimg.cc/T1807fL6/xvwe2krlrzvwmsdg4dyh.jpg",
  },
  {
    id: 6,
    name: "exhaust fan 36 inch size",
    price: 4000,
    image: "https://i.postimg.cc/T1807fL6/xvwe2krlrzvwmsdg4dyh.jpg",
  },
  {
    id: 7,
    name: "exhaust fan 40 inch size",
    price: 2000,
    image: "https://i.postimg.cc/x1dvPcx2/ewlij64lbrk2rkpvxhid.jpg",
  },
  {
    id: 8,
    name: "exhaust fan 44 inch size",
    price: 2000,
    image: "https://i.postimg.cc/T1807fL6/xvwe2krlrzvwmsdg4dyh.jpg",
  },
];


export default function Ventilationproduct() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">
         <span className="underline ">Ventilation </span> <span className="text-green-600 underline-offset-4">Products</span>
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
