import React from "react";
import Header from "../components/Header";
import BooksContent from "../components/BooksContent";

const Home = () => {
  return (
    <div className="bg-slate-100">
      <Header />
      <BooksContent />
    </div>
  );
};

export default Home;
