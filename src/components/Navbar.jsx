import { FiSearch, FiHome, FiUser, FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-wide">
          Mobile<span className="text-blue-200">Store</span>
        </div>

        {/* Search - only on md+ screens */}
        <div className="hidden md:block flex-1 mx-5">
          <div className="relative w-full">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
            <input
              type="text"
              placeholder="Search smartphones, brands..."
              className="w-full rounded-full bg-white/90 px-12 py-2.5 text-sm
              focus:outline-none focus:ring-2 focus:ring-white transition shadow-md"
            />
          </div>
        </div>

        {/* Icons - only on md+ screens */}
        <div className="hidden md:flex items-center gap-3">
          <NavIcon><FiHome /></NavIcon>
          <NavIcon><FiShoppingCart /></NavIcon>
          <NavIcon><FiUser /></NavIcon>
        </div>
      </div>
    </nav>
  );
}

function NavIcon({ children }) {
  return (
    <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 
    transition cursor-pointer text-white">
      <div className="w-5 h-5">{children}</div>
    </div>
  );
}
 
