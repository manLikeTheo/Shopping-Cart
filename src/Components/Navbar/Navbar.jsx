import React from "react";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { MdShop } from "react-icons/md";
import { Link } from "react-router-dom";
import { useShopContext } from "../../Context/ShopContext";
const Navbar = () => {
  const { cartContent } = useShopContext();
  let totalCartItems = 0;
  cartContent.forEach((item) => {
    totalCartItems += item.quantity;
    // console.log(totalCartItems);
  });
  return (
    <nav className="bg-amber-700 p-4 w-full">
      <div className="mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl text-amber-400 font-semibold cursor-pointer hover:scale-105">
            Sauce!<span className="text-4xl font-bold text-white">Shop</span>
          </h1>
        </Link>

        <div className="links flex space-x-5">
          <Link
            to="/"
            className="text-white text-2xl hover:text-amber-400 font-bold"
          >
            <FaHome size={28} />
          </Link>
          <Link
            to="/shop"
            className="text-white text-2xl hover:text-amber-400 font-bold"
          >
            <MdShop size={28} />
          </Link>
          <Link
            to="/cart"
            className="text-white text-2xl hover:text-amber-400 font-bold relative"
          >
            <FaShoppingCart size={28} />
            <p className="cart-quantity absolute top-5 left-3 text-amber-100 text-2xl">
              {totalCartItems}
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
