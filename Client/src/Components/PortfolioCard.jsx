import React from 'react';
import img1 from '../assets/portfolio/img (1).jpg';
import img2 from '../assets/portfolio/img (2).jpg';
import img3 from '../assets/portfolio/img (3).jpg';
import img4 from '../assets/portfolio/img (4).jpg';
import img5 from '../assets/portfolio/img (5).jpg';
import img6 from '../assets/portfolio/img (6).jpg';
import LazyLoad from 'react-lazy-load';

const portfolio = [
    {
        title: "E-commerce",
        image: img1,
        github: "https://github.com/username/ecommerce",
        live: "https://example.com/ecommerce"
    },
    {
        title: "Social Network",
        image: img2,
        github: "https://github.com/username/social-network",
        live: "https://example.com/social"
    },
    {
        title: "Weather App",
        image: img3,
        github: "https://github.com/username/weather-app",
        live: "https://example.com/weather"
    },
    {
        title: "ToDo List",
        image: img4,
        github: "https://github.com/username/todo-list",
        live: "https://example.com/todo"
    },
    {
        title: "Portfolio Website",
        image: img5,
        github: "https://github.com/username/portfolio",
        live: "https://example.com/portfolio"
    },
    {
        title: "Recipe App",
        image: img6,
        github: "https://github.com/username/recipe-app",
        live: "https://example.com/recipe"
    }
];

const PortfolioCard = () => {
    return (
        <LazyLoad>
            <div className='grid gap-5 grid-cols-3 w-[85%] mx-auto'>
                {
                    portfolio.map((item, index) => (
                            <div key={index} className="box">
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