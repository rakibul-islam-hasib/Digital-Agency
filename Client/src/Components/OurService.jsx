import React from 'react';
import { BsLaptop } from 'react-icons/bs';

const OurService = () => {
    const services = [
        {
            name: 'Wordpress',
            details: 'These modular elements can be readily used and customized'
        },
        {
            name: 'Shopify',
            details: 'Build an online store with ease and customize it to your liking'
        },
        {
            name: 'React',
            details: 'Create dynamic user interfaces with the popular React library'
        },
        {
            name: 'Node.js',
            details: 'Build scalable and high-performance web applications with Node.js'
        }
    ];

    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <BsLaptop className="text-4xl text-center text-primary mt-20" />
                <h1 className="text-4xl mt-3 text-center text-primary font-bold"><span className='text-black'>Our</span> Services</h1>
                <div className="w-[70%] text-center mt-5">
                    <p className='text-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, pariatur unde laboriosam illum voluptatibus eaque tenetur maiores quae in rem officia qui, numquam dolores fugiat. Pariatur non atque officiis. Repellendus.</p>
                </div>
            </div>
        </div>
    );
};

export default OurService;