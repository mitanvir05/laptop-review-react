import React from 'react';

const Card = ({review}) => {
    return (
        
        <div className='shadow-lg rounded-2xl w-[250px] p-4 bg-gray-400'>
                <div className='text-2xl'>
                    <span>Name :{review.name}</span>  
                </div>
                <div className='text-xl'>
                    <span>Review :{review.review}</span>
                </div>
                <div className='text-xl'>
                      <span>Ratings :{review.ratings}</span>
                </div>
        </div>
    );
};

export default Card;