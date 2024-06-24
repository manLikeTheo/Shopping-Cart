import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center border-4 border-zinc-500 p-4">
      <h1 className="text-xl font-semibold">This Page Doesn't Exist!</h1>
      <Link
        to="/"
        className="text-lg p-2 bg-amber-600 text-white font-bold rounded-lg hover:scale-95"
      >
        Click Here to Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
