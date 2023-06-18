import React from 'react';
import Question from '../Question/Question';
import SingleCard from '../SingleCard/SingleCard';

const AllCards = ({cards, timeBtn, bookMark}) => {
    return (
        <div className='gird col-span-4 mx-2 sm:m-0'>
                {
                  cards.map((card, index) => <SingleCard bookMark={bookMark} timeBtn={timeBtn} key={index} card={card}></SingleCard>)
                }
                <Question ></Question>
        </div>
    );
};

export default AllCards;