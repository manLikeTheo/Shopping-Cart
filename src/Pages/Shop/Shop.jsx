import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
const Shop = () => {
  return (
    <div className="container">
      <h1 className="text-2xl font-bold my-4 shadow-xl">Products</h1>
      <div className="products-layout flex flex-wrap gap-4 justify-around items-center">
        <div className="product-card flex flex-col  justify-center items-center w-44">
          <img src="src/assets/8.jpg" alt="" />
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

        <div className="product-card flex flex-col  justify-center items-center w-44">
          <img src="src/assets/8.jpg" alt="" />
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

        <div className="product-card flex flex-col  justify-center items-center w-44">
          <img src="src/assets/8.jpg" alt="" />
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

        <div className="product-card flex flex-col  justify-center items-center w-44">
          <img src="src/assets/8.jpg" alt="" />
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

        <div className="product-card flex flex-col  justify-center items-center w-44">
          <img src="src/assets/8.jpg" alt="" />
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

        <div className="product-card flex flex-col  justify-center items-center w-44">
          <img src="src/assets/8.jpg" alt="" />
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

        <div className="product-card flex flex-col  justify-center items-center w-44">
          <img src="src/assets/8.jpg" alt="" />
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
    </div>
  );
};

export default Shop;
