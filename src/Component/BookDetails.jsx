import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);
  console.log(book);

  return (
    <div className="mt-10 w-[80%] mx-auto bg-white rounded-lg flex flex-col md:flex-row gap-8">
      {/* Book Image */}
      <div className="w-full md:w-[50%] p-10 bg-base-200 flex justify-center items-center">
        <img
          src={book.image}
          alt="Book Cover"
          className="rounded-lg h-[500px] rotate-x-20 rotate-y-40"
        />
      </div>

      {/* Book Info */}
      <div className="w-full md:w-[50%] space-y-2 mt-4">
        <h1 className="text-3xl font-bold">{book.bookName}</h1>
        <p className="text-lg text-gray-600">By: {book.author}</p>
        <p className="text-md font-semibold">{book.category}</p>

        <p className="text-gray-600 text-justify">
          <strong>Review:</strong> {book.review}
        </p>

        <div className="flex gap-2">
        {book.tags.map((tag,idx) => (
              <button key={idx} className="btn bg-green-500 text-white">#{tag}</button>
            ))}
        </div>

        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <p>
            <strong>Number of Pages:</strong> {book.totalPages}
          </p>
          <p>
            <strong>Publisher:</strong> {book.publisher}
          </p>
          <p>
            <strong>Year of Publishing:</strong> {book.yearOfPublishing}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {book.rating}
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <button className="px-5 py-2 bg-gray-900 text-white rounded-lg">
            Read
          </button>
          <button className="px-5 py-2 bg-green-500 text-white rounded-lg">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
