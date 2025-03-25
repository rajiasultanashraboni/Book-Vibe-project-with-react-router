import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    tags,
    category,
    rating,
    image,
    author,
    bookName,
  } = book;
  return (
    <Link to={`/books/${bookId}`}>
        <div className="card bg-base-100 gap-4 shadow-sm h-full p-6">
        <figure className="px-10 py-8 bg-base-200">
          <img src={image} alt="Shoes" className="rounded-xl h-[166px]" />
        </figure>
        <div className="card-body items-center text-center space-y-2 ">
          <div className="flex justify-center gap-4 ">
            {tags.map((tag,idx) => (
              <button key={idx} className="btn bg-green-500 text-white">{tag}</button>
            ))}
          </div>
          <h2 className="card-title text-2xl font-bold">{bookName}</h2>
          <p className="text-xl">By: {author}</p>
          <div className="flex justify-between w-full items-center text-xl flex-grow">
            <div>
              <p>{category}</p>
            </div>
            <div className="flex gap-4 items-center">
              <p>{rating}</p>
              <i className="fa-regular fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
