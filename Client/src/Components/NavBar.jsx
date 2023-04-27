import React from 'react';

const NavBar = () => {
    const portfolioNavbar = [
        {
            label: 'Home',
            url: '/',
        },
        {
            label: 'About',
            url: '/about',
        },
        {
            label: 'Portfolio',
            url: '/portfolio',
        },
        {
            label: 'Services',
            url: '/services',
        },
        {
            label: 'Testimonials',
            url: '/testimonials',
        },
        {
            label: 'Blog',
            url: '/blog',
        },
        {
            label: 'Contact',
            url: '/contact',
        },
        {
            label: 'FAQ',
            url: '/faq',
        }
    ];

    return (
        <div className='w-[88%] sticky  top-0 flex justify-between items-center mx-auto py-6'>
            <div className="logo">
                <h1 className='text-3xl text-white font-bold'>R<span className='text-[#2AAFC0]'>.</span></h1>
            </div>
            <div className="text hidden md:block">
                <ul className='flex justify-between text-white text-sm'>
                    {portfolioNavbar.map((item, index) => (
                        <li className='mx-5 text-[16px] font-semibold' key={index}>
                            {item.label}
                        </li>))}
                </ul>

            </div>
        </div>
    );
};

export default NavBar;