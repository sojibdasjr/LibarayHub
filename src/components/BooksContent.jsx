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
    <div>
      {allBooks.map((books) => (
        <SingleBookBox key={books.id} books={books} />
      ))}
    </div>
  );
};

export default BooksContent;
