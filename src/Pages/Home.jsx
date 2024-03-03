import React from "react";
import Header from "../components/Header";
import BooksContent from "../components/BooksContent";
import { IoIosCall } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";

const Home = () => {
  return (
    <div>
      <h1 className="flex items-center text-sm bg-black text-purple-100 justify-center tracking-wide ">
        LibraryHub is world best Library || Since : 1957{" "}
        <IoIosCall className="mx-2" /> +8801683061686{" "}
        <SiMinutemailer className="mx-2 " /> support@libraryhub.com
      </h1>

      <div className="bg-slate-100">
        <Header />
        <BooksContent />
      </div>
    </div>
  );
};

export default Home;
