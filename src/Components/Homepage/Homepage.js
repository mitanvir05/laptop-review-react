import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Card/Card';
import useReviews from '../Hooks/Hooks';


const Homepage = () => {
     const [reviews] = useReviews();
     const navigate = useNavigate();

     const showReviews =()=>{
         navigate('/reviews');
     };
    return (
        <div>
            <div className = 'grid grid-cols-2 gap-4 ' >
                <h1 className='text-5xl font-medium text-green-700'>Best Laptop In Budget Value For Money</h1>
            
                <img className ='mt-4 w-90' src = 'https://m.media-amazon.com/images/I/619-1yADoiL._AC_SY450_.jpg' alt=''/>
            </div>
            <div className='text-center text-4xl font-semibold'>
                <h1>Customer's Feedback</h1>
            </div>
            <div div className = 'mt-5 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center' >
                
                 {reviews.slice(0,3).map(review=>(<Card key={review.id} review={review}/>))}
            </div>
            <div className='text-center text-lg font-bold'>
                <button onClick={showReviews}>Show All</button>
            </div>
        </div>
    );
};

export default Homepage;