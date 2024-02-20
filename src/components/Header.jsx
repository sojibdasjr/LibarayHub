import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="bg-purple-200">
      <div className="md:flex md:max-w-7xl md:mx-auto justify-between py-4 ">
        <h1 className="text-3xl">
          <span className="bg-purple-400  p-2 font-bold rounded-s-lg">
            Libaray
          </span>
          <span className="bg-black font-bold p-2 rounded-e-lg text-purple-700">
            Hub
          </span>
        </h1>
        <button className=" font-bold p-2 rounded-b-lg  bg-purple-400 ">
          <FaCartShopping />
        </button>
      </div>
    </div>
  );
};

export default Header;
