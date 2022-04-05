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
            <div className = 'grid grid-cols-2 gap-4 flex' >
                <h1><span className='text-5xl font-medium text-green-700'>Best Laptop In Budget<br></br> Value For Money</span> <p className='text-xl'>With so many laptops to choose from, selecting the best one to fit your budget can be like navigating a minefield. Even making sense of the ever-changing list of product specifications is no easy feat. Laptops vary greatly by CPU speed, graphics capability, size, drive storage, and RAM, among other things. What’s more, your laptop needs may be completely different to someone else’s, only adding to the confusion.</p></h1>
            
                <img className ='mt-4 w-90' src = 'https://m.media-amazon.com/images/I/619-1yADoiL._AC_SY450_.jpg' alt=''/>
                
            </div>




            
            <div className='text-center text-4xl font-semibold'>
                <h1>Customer's Review</h1>
            </div>
            <div div className = 'mt-5 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center' >
                
                 {reviews.slice(0,3).map(review=>(<Card key={review.id} review={review}/>))}
            </div>
          <div className=' text-center mt-4'>
               <button class="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded" onClick={showReviews}>Show All Reviews</button>
          </div>
        </div>
    );
};

export default Homepage;