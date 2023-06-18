import React from 'react';
import BookMark from '../BookMark/BookMark';
import './AddCard.css'

const AddCard = ({getTime, setBookMr}) => {
    return (
        <div className='ps gird col-span-2 text-center mt-4 ml-5 sticky top-0'>
                <p className='bg-blue-200 py-3 w-full rounded-xl border-2 border-blue-500 font-bold text-blue-600'>Spent time on read : {getTime} min</p>
                <BookMark setBookMr={setBookMr}></BookMark>    
        </div>
    );
};

export default AddCard;
