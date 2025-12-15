import { FiArrowRight } from "react-icons/fi";

export default function CTASection() {
  return (
    <>
      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-500 py-20 px-6 text-white">
        {/* Glow */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to grab your next smartphone?
          </h2>

          <p className="mt-4 text-blue-100">
            Explore our exclusive collection of the latest mobiles.
            Fast delivery, best prices, and unmatched support.
          </p>

          <button
            className="mt-8 inline-flex items-center gap-2 rounded-full 
            bg-white px-8 py-3 text-blue-600 font-semibold
            hover:bg-blue-50 transition shadow-lg"
          >
            Shop Now
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-blue-200">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Mobile<span className="text-blue-400">Store</span>
            </h3>
            <p className="mt-3 text-sm text-blue-300">
              Your trusted destination for premium smartphones and accessories.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Products</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Shipping</li>
              <li className="hover:text-white cursor-pointer">Returns</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-800 text-center py-4 text-sm text-blue-400">
          © {new Date().getFullYear()} MobileStore. All rights reserved.
        </div>
      </footer>
    </>
  );
}
