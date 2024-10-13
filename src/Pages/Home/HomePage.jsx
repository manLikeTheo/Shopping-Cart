import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/nuno-alberto-bg.jpg";
import { FaGithub } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
const HomePage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="intro w-50 opacity-90 bg-transparent p-6 text-center flex flex-col justify-center items-center">
        <h1 className="text-5xl tracking-wider text-white font-bold">
          Welcome to the{" "}
          <Link className="hover:scale-95">
            <span className="sauce text-amber-400">Sauce!</span>
            <span className="shop text-4xl">Shop</span>
          </Link>
        </h1>
        <p className="text-2xl w-1/2 text-white font-semibold m-2">
          Here, you can get all your clothing supplies at{" "}
          <span className="text-amber-600 text-2xl">saucy</span> rates. Sounds
          too good? Check out our products!
        </p>
        <Link to="/shop">
          <button className="text-2xl text-white font-bold bg-amber-700 p-3 rounded-md m-4 hover:scale-95 hover:opacity-90">
            Go To Shop
          </button>
        </Link>
      </div>
      <footer className=" mb-2 absolute bottom-0 flex gap-8 justify-center items-center">
        <p className="text-amber-500 text-lg">© 2024</p>
        <Link
          to="https://github.com/manLikeTheo/Shopping-Cart"
          className="text-amber-600 hover:scale-90"
        >
          {<FaGithub size={28} />}
        </Link>
        <p className="text-amber-500 text-lg flex gap-4 justify-center items-center">
          <span className="text-lg hidden text-amber-600 sm:text-lg sm:inline">
            Image credits:
          </span>
          <Link
            to="https://unsplash.com/photos/man-in-front-of-plush-toy-claw-machine-XOJoyZYTezo?like_photo=true"
            className="text-blue-700"
          >
            {<FaImage size={24} className="hover:scale-105" />}
          </Link>
          <span className="text-amber-600 hidden md:inline lg:text-lg">
            : Nuno Alberto on Unsplash
          </span>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
