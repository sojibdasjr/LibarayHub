import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-200">
      <div className="md:flex md:max-w-7xl mx-auto justify-between py-5">
        <h1 className="text-3xl">
          <span className="bg-red-400 p-2 font-bold rounded-s-lg">Libaray</span>
          <span className="bg-yellow-300 font-bold p-2 rounded-e-lg text-purple-700">
            Hub
          </span>
        </h1>
        <button className=" bg-red-400 p-2 rounded-md  text-white font-bold ">
          Cart
        </button>
      </div>
    </div>
  );
};

export default Header;
