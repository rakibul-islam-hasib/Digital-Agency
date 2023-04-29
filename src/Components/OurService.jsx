import React from 'react';
import { BsLaptop } from 'react-icons/bs';
import nodejs from '../assets/nodejs (1).png';
import react from '../assets/atom.png';
import shopify from '../assets/shopify.png';
import wordpress from '../assets/wordpress.png';
import men from '../assets/men.jpg';
const OurService = () => {
    const services = [
        {
            name: 'Wordpress',
            img : wordpress,
            details: 'These modular elements can be readily used and customized'
        },
        {
            name: 'Shopify',
            img : shopify,
            details: 'Build an online store with ease and customize it to your liking'
        },
        {
            name: 'React',
            img : react,
            details: 'Create dynamic user interfaces with the popular React library'
        },
        {
            name: 'Node.js',
            img : nodejs,
            details: 'Build scalable and high-performance web applications with Node.js'
        }
    ];

    return (
        <div className='w-[88%] mx-auto'>
            <div className="flex flex-col mb-9 justify-center items-center">
                <BsLaptop className="text-4xl text-center text-primary mt-20" />
                <h1 className="text-4xl mt-3 text-center text-primary font-bold"><span className='text-black'>Our</span> Services</h1>
                <div className="w-[70%] text-center mt-5">
                    <p className='text-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, pariatur unde laboriosam illum voluptatibus eaque tenetur maiores quae in rem officia qui, numquam dolores fugiat. Pariatur non atque officiis. Repellendus.</p>
                </div>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
                    <div className="grid md:grid-cols-2 gap-7">
                        {
                            services.map((item , i) => { 
                                return (<div key={i} className='flex flex-col px-3 py-4 justify-center items-center text-center border rounded-2xl'>
                                    <img src={item.img} className='w-[35px] h-[35px]' alt="" />
                                    <h1 className='text-primary font-bold text-xl my-3'>{item.name}</h1>
                                    <p className='text-light'>{item.details}</p>
                                </div>)
                            })
                        }
                    </div>
                    <div className="">
                        <img className='rounded-lg' src={men} alt="" />
                    </div>
            </div>
        </div>
    );
};

export default OurService;