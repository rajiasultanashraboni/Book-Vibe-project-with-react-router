import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {
    const[books,setBooks]=useState([])

    useEffect(()=>{
        fetch('booksData.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div className='mt-10 w-[80%] mx-auto'>
            <h1 className='text-3xl mb-10 font-bold text-center'>Books</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {
                books.map(book=><Book book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;