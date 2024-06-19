import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Navbar from "../../Components/Navbar/Navbar";
const Shop = () => {
  return (
    <div className="flex flex-col items-center bg-slate-200 ">
      <Navbar />
      <h1 className="text-4xl font-bold my-4 shadow-xl">Products</h1>
      <div className="products-layout h-screen w-full p-4 flex flex-wrap gap-4 ">
        <div className="product-card flex gap-6 justify-center items-center w-96 h-80 p-4 border-2 border-black">
          <img src="src/assets/8.jpg" alt="" />
          <div className="product-info border-2 border-black flex flex-col gap-2 p-2 items-center">
            <p className="title text-xl font-semibold text-center">
              Product Title
            </p>
            <p className="price text-2xl font-semibold">$50</p>
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

        {/* <div className="product-card flex gap-6  justify-center items-center w-50 p-4 border-2 border-black">
          <img src="src/assets/8.jpg" alt="" />
          <div className="product-info">
            <p className="title text-lg font-semibold">Product Title</p>
            <p className="price text-lg font-semibold">$50</p>
            <div className="quantity-input flex items-center justify-center border-4 px-2 w-20">
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
          </div>
        </div>
        <div className="product-card flex gap-6  justify-center items-center w-50 p-4 border-2 border-black">
          <img src="src/assets/8.jpg" alt="" />
          <div className="product-info">
            <p className="title text-lg font-semibold">Product Title</p>
            <p className="price text-lg font-semibold">$50</p>
            <div className="quantity-input flex items-center justify-center border-4 px-2 w-20">
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
          </div>
        </div>
        <div className="product-card flex gap-6  justify-center items-center w-50 p-4 border-2 border-black">
          <img src="src/assets/8.jpg" alt="" />
          <div className="product-info">
            <p className="title text-lg font-semibold">Product Title</p>
            <p className="price text-lg font-semibold">$50</p>
            <div className="quantity-input flex items-center justify-center border-4 px-2 w-20">
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
          </div>
        </div>
        <div className="product-card flex gap-6  justify-center items-center w-50 p-4 border-2 border-black">
          <img src="src/assets/8.jpg" alt="" />
          <div className="product-info">
            <p className="title text-lg font-semibold">Product Title</p>
            <p className="price text-lg font-semibold">$50</p>
            <div className="quantity-input flex items-center justify-center border-4 px-2 w-20">
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
          </div>
        </div>
        <div className="product-card flex gap-6  justify-center items-center w-50 p-4 border-2 border-black">
          <img src="src/assets/8.jpg" alt="" />
          <div className="product-info">
            <p className="title text-lg font-semibold">Product Title</p>
            <p className="price text-lg font-semibold">$50</p>
            <div className="quantity-input flex items-center justify-center border-4 px-2 w-20">
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
          </div>
        </div>
        <div className="product-card flex gap-6  justify-center items-center w-50 p-4 border-2 border-black">
          <img src="src/assets/8.jpg" alt="" />
          <div className="product-info">
            <p className="title text-lg font-semibold">Product Title</p>
            <p className="price text-lg font-semibold">$50</p>
            <div className="quantity-input flex items-center justify-center border-4 px-2 w-20">
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
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Shop;
