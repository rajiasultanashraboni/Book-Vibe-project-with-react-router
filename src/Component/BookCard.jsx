import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
      <img
        src={book.image}
        alt={book.bookName}
        className="w-32 h-40 object-cover rounded-md"
      />
      <h3 className="font-bold mt-2">{book.bookName}</h3>
      <p className="text-sm">{book.author}</p>
      <p className="text-sm">{book.category}</p>
    </div>
  );
};

export default BookCard;
