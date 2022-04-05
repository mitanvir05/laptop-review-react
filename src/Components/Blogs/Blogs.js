import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div div className = 'shadow-lg rounded-2xl w-[600px] p-4 bg-gray-300' >
            <h1 className='text-2xl font-semibold'>What is contex api ?</h1>
            <p className='text-xl'> Ans: Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
        </div>
        <div div className = 'shadow-lg rounded-2xl w-[600px] p-4  bg-amber-100 mt-4' >
            <h1 className='text-2xl font-semibold'>What is semantic tag ?</h1>
            <p className='text-xl'> Ans: Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the code tag is immediately recognized by the browser as some type of coding language.</p>
        </div>
        </div>
    );
};

export default Blogs;