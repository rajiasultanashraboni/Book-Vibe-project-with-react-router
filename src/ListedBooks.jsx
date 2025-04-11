
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadLists, getStoredWishLists } from "./utility/AddToDb";
import Book from "./Component/Book";

const ListedBooks = () => {
  const [readLists,setReadLists]=useState([])
  const [wishlists,setWishLists]=useState([])
  const allBooks = useLoaderData()

  useEffect(()=>{
    const storedReadList = getStoredReadLists()
    const storedReadListint=(storedReadList.map(id=>parseInt(id)))
    const readBookList = allBooks?.filter(book => storedReadListint.includes(book.bookId)) || [];

    setReadLists(readBookList)
  }, [allBooks])
 
  useEffect(()=>{
    const storedWishList = getStoredWishLists()
    const storedWishListint=(storedWishList.map(id=>parseInt(id)))
    const wishBookList = allBooks?.filter(book => storedWishListint.includes(book.bookId)) || [];

    setWishLists(wishBookList)
  }, [allBooks])
 

  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-3xl font-bold text-center mt-10">Listed Books</h1>

      <Tabs>
        <TabList>
          <Tab>Read Book List:</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
            {
              readLists.map(book=><Book key={book.bookId} book={book}></Book>)
            }
          </div>
        </TabPanel>

        <TabPanel>
        <div className="grid grid-cols-3 gap-4">
            {
              wishlists.map(book=><Book key={book.bookId} book={book}></Book>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
