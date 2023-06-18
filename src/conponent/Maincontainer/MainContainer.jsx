import React, { useEffect, useState } from 'react';
import AddCard from '../AddCard/AddCard';
import AllCards from '../AllCards/AllCards';
import Toast from 'sweetalert2'

const MainContainer = () => {
    const [cards, setCard] = useState([]);
    useEffect(()=>{
        fetch('cardItem.json')
        .then(res => res.json())
        .then(data => setCard(...cards, data))
},[])

const [times, setTime] = useState(0)
const timeBtn = (time)=>{
    setTime(times + time);
}
const [bookMarks, setBookMark] = useState([])
const bookMark = (cards) =>{
    const getCart = bookMarks.find(cart => cart._id === cards._id);
        if (getCart) {
            Toast.fire({
                title: 'Error!',
                text: 'BookMark Already exists!',
                icon: 'error',
                confirmButtonText: 'Close'
              })
        }
        else{
            setBookMark([...bookMarks,cards]);
        }
}
    return (
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-6 sm:p-2'>
            <AllCards bookMark={bookMark} timeBtn={timeBtn} cards={cards}></AllCards>
            <AddCard setBookMr={bookMarks} getTime={times}></AddCard>
        </div>
    );
};


export default MainContainer;