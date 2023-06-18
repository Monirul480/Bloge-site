import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar,faBookmark } from '@fortawesome/free-solid-svg-icons'
const SingleCard = ({card, timeBtn, bookMark}) => {
    const {cover, name, registered, time, profile, title, _id} = card;
    return (
        <>
        <div className='rounded-b-sm border-b-2 pb-1 mt-3'>
            <img className='w-full h-80 rounded-xl' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex mt-4'>
                    <div>
                        <img className='mt-1 h-10 w-10 rounded-2xl' src={profile} alt=""/>
                    </div>
                    <div className='ml-4'>
                        <p className='font-semibold pl-0 ml-0'>{name}</p>
                        <p><FontAwesomeIcon icon={faCalendar} /> {registered}</p>
                    </div>
                </div>
                <div>
                    <p>{time} <span className='mr-3'>Min Red</span> <FontAwesomeIcon onClick={() => bookMark(card)} style={{cursor: 'pointer'}} icon={faBookmark} /></p>
                </div>
            </div>
            <p className='font-bold text-xl text-start mt-2'>{title}</p>
            <button onClick={()=>timeBtn(time)} className='text-start text-blue-700 underline mt-3'>Mark as read</button>
        </div>
        </>
    );
};

export default SingleCard;