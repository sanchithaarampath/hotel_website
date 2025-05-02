import { FaFacebookF, FaInstagram, FaArrowUp } from "react-icons/fa";
import { AiFillApple, AiOutlineMail } from "react-icons/ai";
import { IoLogoGooglePlaystore, IoCall } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className="bg-purple-900 text-white py-10 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg2.png')" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="font-serif text-lg flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 rounded-full inline-block mr-3 object-cover"
            />
            Visit Sri Lanka
          </h2>
          <p className="text-sm mt-2">
            Welcome to our Trip and Tour Agency. Lorem simply text amet cinc elit...
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <p className="flex items-center">
              <IoCall className="text-green-500 mr-2" /> +94 76 5288 052
            </p>
            <p className="flex items-center">
              <AiOutlineMail className="text-blue-500 mr-2" /> visitsrilanka@gmail.com
            </p>
            <p className="flex items-center">
              <MdLocationOn className="text-teal-400 mr-2" /> 54, abcd street, Colombo
            </p>
          </div>
        </div>

        {/* Center Section */}
        <div>
          <h2 className="font-bold text-lg">Company</h2>
          <ul className="mt-2 space-y-2 text-sm text-white-600">
            <li><a href="/about"><span className="hover:text-red-600">About Us</span></a></li>
            <li><a href="/team"><span className="hover:text-red-600">Meet The Team</span></a></li>
            <li><a href="/contact"><span className="hover:text-red-600">Contact Us</span></a></li>
            <li><a href="/privacy"><span className="hover:text-red-600">Privacy Policy</span></a></li>
          </ul>
        </div>

        {/* Right Section - Subscribe */}
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 mb-2 bg-yellow-100 text-black rounded-md focus:outline-none"
          />
          <button className="w-full p-2 bg-yellow-400 text-black font-bold rounded-md">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 bg-gray-300 py-3 px-6 flex flex-col md:flex-row items-center justify-between">
        <button className="bg-yellow-400 p-2 rounded-md">
          <FaArrowUp className="text-black" />
        </button>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaFacebookF className="text-black cursor-pointer" />
          <FaInstagram className="text-black cursor-pointer" />
          <AiFillApple className="text-black cursor-pointer" />
          <IoLogoGooglePlaystore className="text-black cursor-pointer" />
        </div>
        <p className="text-xs text-black mt-4 md:mt-0">
          © All Copyright 2024, Visit Sri Lanka
        </p>
      </div>
    </footer>
  );
};

export default Footer;
