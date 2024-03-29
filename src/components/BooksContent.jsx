import React, { useEffect, useState } from "react";
import SingleBookBox from "./SingleBookBox";

const BooksContent = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-4 max-w-7xl mx-auto mt-2">
      {allBooks.map((books) => (
        <SingleBookBox key={books.id} books={books} />
      ))}
    </div>
  );
};

export default BooksContent;
