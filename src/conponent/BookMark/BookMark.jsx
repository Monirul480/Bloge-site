import React from 'react';
import SingleBookMark from './SingleBookMark';

const BookMark = ({setBookMr}) => {
    return (
        <div className='text-start bg-slate-300 px-4 pt-1 pb-2 mt-3 rounded-md'>
            <h1 className='font-bold my-2 text-xl'>Bookmarked Blogs : {setBookMr.length}</h1>
            
            {
               setBookMr.map(book => <SingleBookMark key={book._id} setBook={book}></SingleBookMark>) 
            }
        </div>
    );
};

export default BookMark;