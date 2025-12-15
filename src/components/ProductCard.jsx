import { FiShoppingCart } from "react-icons/fi";

export default function ProductCard({ mobile }) {
  return (
    <div className="group relative rounded-2xl bg-gradient-to-br from-black to-blue-950 
    border border-white/10 overflow-hidden hover:border-blue-500/40 transition">

      {/* Image */}
      <div className="relative flex justify-center bg-black/40 p-5">
        <img
          src={mobile.img}
          alt={mobile.name}
          className="w-40 h-56 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-white">
          {mobile.name}
        </h3>

        <p className="mt-1 text-sm text-blue-300 line-clamp-2">
          {mobile.description}
        </p>

        <p className="mt-3 text-xl font-bold text-blue-400">
          ₹{mobile.price}
        </p>

        <button
          className="mt-4 w-full flex items-center justify-center gap-2 
          rounded-full bg-blue-600 px-4 py-2.5 text-white font-medium
          hover:bg-blue-700 transition"
        >
          <FiShoppingCart />
          Buy Now
        </button>
      </div>

      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-blue-500/40 transition pointer-events-none" />
    </div>
  );
}
