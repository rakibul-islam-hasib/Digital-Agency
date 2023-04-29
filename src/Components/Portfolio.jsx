import React from 'react';
import { AiOutlineFileDone } from 'react-icons/ai';

const Portfolio = () => {
    return (
        <div className='mt-28 flex justify-center items-center'>
            <div className="flex justify-center w-[76%] mx-auto items-center flex-col">
                <AiOutlineFileDone className='text-5xl text-primary mb-4' />
                <h1 className='text-4xl font-semibold'>Creative <span className='text-primary'>Portfolio</span></h1>
                <p className='text-center text-light  my-5  '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos in veniam eum cupiditate recusandae aliquid dolorum, quod id corporis eos explicabo minima ab, voluptatibus eius. Quis repellendus explicabo nulla rerum!</p>
            </div>
        </div>
    );
};

export default Portfolio;