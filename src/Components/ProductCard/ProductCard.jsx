import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card flex flex-col gap-3 justify-between items-center w-50 h-50 p-4 border-2 border-black">
      <img
        src={product.image}
        alt="product-image"
        className="border-4 border-red-500 w-full h-48 object-contain mb-1"
      />
      <div className="product-info  flex flex-col gap-2 w-full max-w-xs p-2 items-center shadow-lg shadow-slate-500">
        <p className="title text-xl font-semibold text-center">
          {product.title}
        </p>
        <p className="price text-2xl font-semibold">{product.price}</p>
        <div className="quantity-input flex items-center justify-center border-2 p-2 w-20">
          <button>
            <FaMinus />
          </button>
          <input
            className="p-2 w-14 text-center font-semibold text-xl"
            type="number"
            value={0}
            min={0}
          />
          <button>
            <FaPlus />
          </button>
        </div>
        <button className="bg-amber-600 p-2 rounded-lg text-white font-semibold">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
