import React from 'react';

const SingleBookMark = ({setBook}) => {
    const {title, _id} = setBook
    return (
        <div className='bg-white pl-4 mb-3 rounded-sm font-bold'>
            <p>{title}</p>
        </div>
    );
};

export default SingleBookMark;