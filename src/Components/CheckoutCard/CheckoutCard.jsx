import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useShopContext } from "../../Context/ShopContext";
// import {
//   handleValueChange,
//   handleDecrement,
//   handleIncrement,
// } from "../../Utils/Utils";

const CheckoutCard = ({ item }) => {
  // const { cartContent, setCartContent } = useShopContext();

  return (
    <div className="checkout-card  flex justify-between items-center gap-4 border-b-4 m-3 p-4">
      <img src={item.image} width={100} alt="" />
      <div className="product-info flex flex-col">
        <p className="product-title text-xl font-semibold">{item.title}</p>
        <div className="adjust-remove flex justify-center items-center gap-2 ">
          <button className="hover:opacity-60">
            <FaMinus />
          </button>
          <input
            type="number"
            className="w-14 p-2 text-center bg-slate-100 text-xl outline-none border-none"
            value={item.quantity}
            onChange={(e) => console.log(e.target.value)}
          />
          <button className="hover:opacity-60">
            <FaPlus />
          </button>
        </div>
      </div>
      <p className="price text-2xl font-semibold">${item.price}</p>
    </div>
  );
};

export default CheckoutCard;
