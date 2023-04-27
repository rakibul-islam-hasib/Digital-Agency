import React from 'react';

const Hero = () => {
    return (
        <div className='h-[87vh] text-white  flex justify-center items-center'>
            <div className="text-center">
                <h1 className='text-6xl text-center font-bold'>BIG DESIGN AGENCY</h1>
                <p className='text-base text-center my-4'>We are a passionate digital design agency that specializes in beautiful and easy-to-use digital design <br /> & web development services.</p>
                <button className='bg-primary px-6 py-3 rounded-full'>Get Started</button>
            </div>
        </div>
    );
};

export default Hero;