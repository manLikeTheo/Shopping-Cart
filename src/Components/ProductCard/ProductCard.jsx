import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useShopContext } from "../../Context/ShopContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useShopContext();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    // console.log(e.target.value);
    setQuantity(e.target.value);
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };

  //   Handle Add product to cart
  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
      setQuantity(1); // reset quantity to default value
    }
  };
  return (
    <div className="product-card flex flex-col gap-3 justify-between items-center w-50 h-50 p-4 border-2 border-black">
      <img
        src={product.image}
        alt="product-image"
        className="w-full h-48 object-contain"
      />
      <div className="product-info  flex flex-col gap-2 w-full max-w-xs p-2 items-center shadow-lg shadow-slate-500">
        <p className=" text-xl font-semibold text-center">{product.title}</p>
        <p className="price text-2xl font-semibold">$ {product.price}</p>
        <div className="quantity-input flex gap-3 items-center justify-center p-2">
          <button onClick={handleDecreaseQuantity} className="text-xl">
            <FaMinus />
          </button>
          <input
            className="p-2 max-w-16 text-center font-semibold text-2xl bg-slate-50"
            type="number"
            value={quantity}
            min={0}
            onChange={handleQuantityChange}
          />
          <button onClick={handleIncreaseQuantity} className="text-xl">
            <FaPlus />
          </button>
        </div>
        <button
          className="bg-amber-600 p-2 rounded-lg text-white font-semibold hover:scale-90"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
