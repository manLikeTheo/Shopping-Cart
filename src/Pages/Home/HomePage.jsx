import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('src/assets/nuno-alberto-bg.jpg')" }}
    >
      <div className="intro w-1/2 bg-transparent p-6 text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl tracking-wider text-white font-bold">
          Welcome to the{" "}
          <Link className="hover:scale-95">
            <span className="sauce text-amber-400">Sauce!</span>
            <span className="shop text-4xl">Shop</span>
          </Link>
        </h1>
        <p className="text-xl text-white font-semibold m-2">
          Here, you can get all your clothing supplies at{" "}
          <span className="text-amber-600 text-2xl">saucy</span> rates. Sounds
          too good? Check out our products!
        </p>
        <button className="text-2xl text-white font-bold bg-amber-700 p-3 rounded-md m-4 hover: scale-95">
          Go To Shop
        </button>
      </div>
    </div>
  );
};

export default HomePage;
