import React from "react";
import { BiDollar } from "react-icons/bi";
import { FaRegGem } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { MdDateRange } from "react-icons/md";
const SingleBookBox = ({ books }) => {
  const {
    id,
    book_name,
    cover_image,
    author_name,
    small_description,
    price,
    credit,
    publish,
  } = books;
  return (
    <div className="flex flex-col justify-between border border-gray-300 my-2 shadow-lg shadow-stone-200/50">
      <div className="p-2 ">
        <img
          className=" w-54 h-64 mx-auto   rounded-2xl border  "
          src={cover_image}
          alt={`this is cover image of ${book_name}`}
        />
        <h1 className="text-2xl font-bold">{book_name}</h1>
        <h1>{small_description}</h1>
        <hr className="my-1" />
      </div>

      <div className="font-bold ms-2 ">
        <h1 className="flex items-center gap-2">
          <TfiWrite /> {author_name}
        </h1>
        <h1 className="flex items-center gap-2">
          <MdDateRange />
          {publish}
        </h1>
      </div>

      <div className="flex  justify-between p-2">
        <h1 className="flex gap-1 items-center">
          <BiDollar /> {price}
        </h1>
        <h1 className="flex gap-1 items-center">
          <FaRegGem /> {credit}
        </h1>
      </div>
      <button className="bg-purple-400 mx-2 my-1 p-2 focus:bg-purple-600 font-bold  rounded-md ">
        Add To Cart
      </button>
    </div>
  );
};

export default SingleBookBox;
