import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Reviews = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then (data=>setReviews(data))
    },[])

    return (
        <div>
            <div className=' text-center text-4xl mt-4 font-semibold'>
                <h1>Customer's Feedback About the Products</h1>
            </div>
            <div className='px-4 pt-20 mx-auto max-w-7xl'>
            <h1 className='text-2xl text-center text-gray-400 mb-5'>Reviews:({reviews.length})</h1>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                {reviews.map(review=>(<Card key={review.id} review={review}/>))}
            </div>
        </div>
        </div>
    );
};

export default Reviews;