import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAppStore, FaGooglePlay } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="bg-[#c8a8ad]">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-8 py-2 text-black text-sm">
        <div className="flex items-center space-x-4">
          <FaPhoneAlt />
          <span>+94 76 5288 052</span>
          <MdEmail />
          <span>visitsrilanka@gmail.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaInstagram className="text-xl cursor-pointer hover:text-gray-700" />
          <FaFacebookF className="text-xl cursor-pointer hover:text-gray-700" />
          <FaAppStore className="text-xl cursor-pointer hover:text-gray-700" />
          <FaGooglePlay className="text-xl cursor-pointer hover:text-gray-700" />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[url('/bg.png')] bg-cover bg-center py-4">
        <div className="flex items-center justify-between px-8">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Visit Sri Lanka Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <h1 className="text-2xl font-extrabold tracking-wide text-gray-800 font-serif">
                Visit Sri Lanka
              </h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md w-full">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-[#c8a8ad] rounded-full outline-none w-full"
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-600" />
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            <a href="/ride" className="text-black hover:text-gray-700 transition duration-300">Ride</a>
            <a href="/map" className="text-black hover:text-gray-700 transition duration-300">Map</a>
            <a href="#" className="text-black hover:text-gray-700 transition duration-300">Review</a>
            <button>
              <a href="/login" className="bg-black text-white px-4 py-1 rounded-full hover:bg-gray-700 transition duration-300">
                Sign in
              </a>
            </button>
          </div>
        </div>

        {/* Bottom Menu */}
        <div className="flex justify-center space-x-4 mt-4 bg-[#c8a8ad] px-4 py-2 rounded-full text-black">
          <a href="/" className="text-black hover:text-gray-700 transition duration-300">Discover</a>
          <a href="/destinations" className="text-black hover:text-gray-700 transition duration-300">Destinations</a>
          <a href="/populartours" className="text-black hover:text-gray-700 transition duration-300">Tours</a>
          <a href="/about" className="text-black hover:text-gray-700 transition duration-300">About</a>
          <a href="#" className="text-black hover:text-gray-700 transition duration-300">News</a>
          <a href="/contact" className="text-black hover:text-gray-700 transition duration-300">Contact</a>
        </div>
      </nav>
    </header>
  );
}
