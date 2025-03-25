import React from 'react';
import BannerImage from '../assets/books.jpg'
const Banner = () => {
    return (
        <div className=' bg-base-200'>
            <div className="w-[80%] mx-auto hero p-5 ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-6">
                    <img
                    src={BannerImage}
                    className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='space-y-6'>
                    <h1 className="text-5xl font-bold ">Books to freshen up your bookshelf</h1>
                    <button className="btn bg-green-600 text-white">View the list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;