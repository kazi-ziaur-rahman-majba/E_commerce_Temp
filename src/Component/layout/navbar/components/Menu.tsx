import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useState } from "react";
import Logo from "../../../logo/Logo";
import useWishlist from "../../../../hooks/useWishlist";

const Menu = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  // Wishlist Count
  const { wishlist } = useWishlist();
  const wishlistCount = wishlist.length;

  return (
    <nav className="py-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 flex flex-row justify-between items-center gap-3 sm:gap-6">
      {/* Logo Section */}
      <div className="flex justify-center sm:justify-start w-auto">
        <Logo />
      </div>

      {/* Search Box */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2.5 rounded-full pl-12 pr-4 focus:outline-none focus:ring-2 border border-[#064490] text-[#064490] text-sm font-semibold hover:bg-[#064490]/5 transition-colors duration-300"
        />
        <BiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl cursor-pointer hover:text-green-600 transition duration-200" />
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-4 sm:gap-6 text-sm">
        <Link to="/wishlist" className="group relative">
          <div className="flex flex-col items-center gap-1 md:ml-16">
            <span className="absolute bottom-10 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              Wishlist
            </span>
            <MdFavoriteBorder className="text-2xl text-gray-700 group-hover:text-[#064490] transform transition duration-200 group-hover:scale-110" />
            
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full shadow-md">
                {wishlistCount}
              </span>
            )}
          </div>
        </Link>

        {/* Login / Register section */}
        <div className="hidden sm:block">
          <div className="flex items-center gap-2 text-gray-700">
            <IoPersonCircleSharp className="text-4xl hover:border hover:border-[#064490] rounded-full p-1 group-hover:text-[#064490] transform transition duration-200 group-hover:scale-110" />
            <div className="flex gap-1">
              <Link to="/login" className="hover:text-[#064490] transition duration-200">Login</Link>
              <span>|</span>
              <Link to="/signup" className="hover:text-[#064490] transition duration-200">Register</Link>
            </div>
          </div>
        </div>

        {/* Mobile login toggle */}
        <div className="block sm:hidden relative">
          <button
            onClick={() => setIsLoginOpen(!isLoginOpen)}
            className="group focus:outline-none"
          >
            <IoPersonCircleSharp className="text-4xl hover:border hover:border-[#064490] rounded-full p-1 group-hover:text-[#064490] transform transition duration-200 group-hover:scale-110" />
          </button>
          {isLoginOpen && (
            <div className="absolute right-0 mt-2 bg-white rounded shadow p-2 z-50">
              <Link to="/login" onClick={() => setIsLoginOpen(false)} className="block px-4 py-2 text-gray-800 hover:text-[#064490]">Login</Link>
              <Link to="/register" onClick={() => setIsLoginOpen(false)} className="block px-4 py-2 text-gray-800 hover:text-[#064490]">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Menu;
