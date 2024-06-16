import React from "react";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { MdShop } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-amber-900 p-4 w-full">
      <div className="mx-auto flex justify-between items-center">
        <h1 className="text-3xl text-amber-400 font-semibold cursor-pointer hover:scale-105">
          Sauce!<span className="text-4xl font-bold text-white">Shop</span>
        </h1>
        <div className="links flex space-x-5">
          <Link
            to="/"
            className="text-white text-2xl hover:text-amber-400 font-bold"
          >
            <FaHome size={28} />
          </Link>
          <Link
            to="/"
            className="text-white text-2xl hover:text-amber-400 font-bold"
          >
            {/* Shop */}
            <MdShop size={28} />
            {/* <FaShop size={20} /> */}
          </Link>
          <Link
            to="/"
            className="text-white text-2xl hover:text-amber-400 font-bold"
          >
            <FaShoppingCart size={28} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
