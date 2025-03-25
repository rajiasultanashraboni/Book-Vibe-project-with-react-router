import React from "react";

const Book = ({ book }) => {
  const {
    yearOfPublishing,
    publisher,
    tags,
    category,
    rating,
    totalPages,
    review,
    image,
    author,
    bookName,
  } = book;
  return (
    <div>
      <div className="card bg-base-100 gap-4 shadow-sm h-full">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl h-[250px]"
          />
        </figure>
        <div className="card-body items-center text-center space-y-4 ">
          <h2 className="card-title text-2xl font-bold">{bookName}</h2>
          <p className="text-xl">
            By: {author}
          </p>
          <div className="flex justify-between w-full items-center text-xl flex-grow">
            <div>
                <p>{category}</p>
            </div>
            <div className="flex gap-4 items-center">
                <p>{rating}</p>
                <i class="fa-regular fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
