import React from "react";

const SingleBookBox = ({ books }) => {
  const {
    id,
    book_name,
    cover_image,
    author_name,
    small_description,
    price,
    credit,
  } = books;
  return (
    <div>
      <img src={cover_image} alt={`this is cover image of ${book_name}`} />
      <h1>{book_name}</h1>
      <h1>{small_description}</h1>
      <h1>{author_name}</h1>
      <h1>{price}</h1>
      <h1>{credit}</h1>
    </div>
  );
};

export default SingleBookBox;
