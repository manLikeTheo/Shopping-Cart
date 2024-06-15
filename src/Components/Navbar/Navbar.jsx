import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-amber-900 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl text-amber-400 font-semibold cursor-pointer hover:scale-105">
          Sauce!<span className="text-4xl font-bold text-white">Shop</span>
        </h1>
        <div className="links flex space-x-4">
          <Link
            to="/"
            className="text-white text-2xl hover:text-black font-bold"
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-white text-2xl hover:text-black font-bold"
          >
            Shop
          </Link>
          <Link
            to="/"
            className="text-white text-2xl hover:text-black font-bold"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
