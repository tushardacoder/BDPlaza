import { Link } from "react-router";
 const products = [
  {
    id: 1,
    name: "Fire Alarm Lyon CDAN",
    price: 1000,
    image: "https://i.postimg.cc/CLXHMFLV/mypgtbb2cpkvmgjiepbv.jpg",
  },
  {
    id: 2,
    name: "Fixed Temperature Detector 5351E (LPCB)",
    price: 1500,
    image: "https://i.postimg.cc/kGZ85cCc/kxwza9rebyrqg7ehs1jo.jpg",
  },
  {
    id: 3,
    name: "Smoke Detector-Photo 2351E (LPCB)",
    price: 1800,
    image: "https://i.postimg.cc/jjKfC2pX/hxpjsxdpebx2qd3yehtl.jpg",
  },
  {
    id: 4,
    name: "High Base A30XZAL",
    price: 2500,
    image: "https://i.postimg.cc/sXHGncvq/tcwyf1b8grgsbpxf1pj1.jpg",
  },
  {
    id: 5,
    name: "Isolator KABY",
    price: 1999.99,
    image: "https://i.postimg.cc/jjsWt9fF/wueydataviwevwgmwkzw.webp",
  },
  {
    id: 6,
    name: "Ethernet Adaptor Lyon Panel Kitmey",
    price: 1000,
    image: "https://i.postimg.cc/nrQr3t8L/kpystq06yezvmnpbx5zk.webp",
  },
  {
    id: 7,
    name: "Lyon back panel verified circuit CDAC0008RD",
    price: 1899.97,
    image: "https://i.postimg.cc/SQwfkSxL/eo5twnj8oa2c038fbv05.jpg",
  },
  {
    id: 8,
    name: "verified cpu circuit v2 lyon control panel cdac200102",
    price: 2000,
    image: "https://i.postimg.cc/YC7NLdgj/ho13tompc5ihgnvwrlqy.jpg",
  },
];


export default function Firedetection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">
         <span className="underline ">Firefighting Detection </span> <span className="text-green-600 underline-offset-4">Products</span>
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
