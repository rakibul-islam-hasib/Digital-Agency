import React from 'react';
import LazyLoad from 'react-lazy-load';

const portfolio = [
    {
        title: "E-commerce",
        image: 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=740&t=st=1682686097~exp=1682686697~hmac=693c8e1c24e52db4adfdd0741519efc8a7cfa8d7bfefb08c2bd08845faffdcba',
        github: "https://github.com/username/ecommerce",
        live: "https://example.com/ecommerce"
    },
    {
        title: "Social Network",
        image: 'https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?w=740&t=st=1682686143~exp=1682686743~hmac=bf62e1cf94295683cf356f0f85ee13b0858b882ed216482a898b770b8e428feb',
        github: "https://github.com/username/social-network",
        live: "https://example.com/social"
    },
    {
        title: "Weather App",
        image: 'https://img.freepik.com/free-vector/robot-human_53876-90440.jpg?w=740&t=st=1682686168~exp=1682686768~hmac=732c692c21884a5c31407916e875e2ba37ee4b3532b35d1373121b78cb3efdbf',
        github: "https://github.com/username/weather-app",
        live: "https://example.com/weather"
    },
    {
        title: "ToDo List",
        image: 'https://img.freepik.com/premium-photo/abstract-modern-tech-programming-code-screen-developer-c-programming-language-computer-script-technology-background-software_505353-472.jpg?w=826',
        github: "https://github.com/username/todo-list",
        live: "https://example.com/todo"
    },
    {
        title: "Portfolio Website",
        image: 'https://img.freepik.com/premium-photo/coded-stuff-screen_236854-21687.jpg?w=740',
        github: "https://github.com/username/portfolio",
        live: "https://example.com/portfolio"
    },
    {
        title: "Recipe App",
        image: 'https://img.freepik.com/free-photo/woman-use-laptop-work-cafe_53876-138123.jpg?w=740&t=st=1682686263~exp=1682686863~hmac=2a73079e9d4d06d58bc58fafc29bd5cae92a2995ad7ea1b715bfccdeeacbd8ee',
        github: "https://github.com/username/recipe-app",
        live: "https://example.com/recipe"
    }
];

const PortfolioCard = () => {
    return (
        <LazyLoad>
            <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 w-[85%] mx-auto'>
                {
                    portfolio.map((item, index) => (
                            <div  data-aos="fade-left" key={index} className="box">
                                <img draggable="false" src={item.image} alt="" />
                                <h3>{item.title}</h3>
                                <div className="icons">
                                    <a href={item.github} target="_blank">
                                        <i className="bx bxl-github"></i></a>

                                    <a href={item.live} target="_blank">
                                        <i className="bx bx-show"></i></a>

                                    <a href="#" target="_blank">
                                        <i className="bx bx-link"></i></a>
                                </div>
                            </div>
                    ))
                }
            </div>
        </LazyLoad>
    );
};

export default PortfolioCard;