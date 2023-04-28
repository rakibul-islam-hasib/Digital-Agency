import React from 'react';
import freezing from '../assets/freezing.png';
import Innovation from '../assets/project-management.png';
import Collaboration from '../assets/collaborate.png';
import Modularity from '../assets/3d-cube.png';
const Story = () => {
    const storySection = [
        {
            name: 'Innovation',
            img: Innovation,
            description: 'Our team of experts is constantly researching and implementing the latest technologies to keep our clients ahead of the curve.',
        },
        {
            name: 'Collaboration',
            img: Collaboration,
            description: 'We believe that the best results come from working closely with our clients and fostering strong partnerships to achieve shared goals.',
        },
        {
            name: 'Modularity',
            img: Modularity,
            description: 'Our modular elements can be easily customized and reused across pages and blocks, saving time and ensuring consistency in design.',
        }
    ];

    return (
        <div className='lg:mt-32 md:mt-20 mt-14  md:w-[88%] mx-auto'>
            <div className="text-center flex flex-col justify-center items-center">
                <img className='w-[35px]' src={freezing} alt="" />
                <h1 className='text-3xl mt-4 font-bold text-black'>Our <span className='text-primary'>Story</span></h1>
                <div className="w-[70%] mx-auto">
                    <p className='text-lg my-5'>Lorem ipsum dolor  ullam quaerat optio voluptatibus ipsam voluptatem quo obcaecati eius commodi recusandae eaque laborum inventore, dicta error!</p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[80%] md:w-full mx-auto md:gap-6">
                {
                    storySection.map((item, index) => (
                        <div className='flex flex-col border justify-center items-center py-8 text-center rounded-lg my-10' key={index}>
                                <img className='w-[45px]' src={item.img} alt="" />
                            <div className="md:w-[65%]">
                                <h1 className='text-2xl font-bold'>{item.name}</h1>
                                <p className='text-base mt-4'>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Story;