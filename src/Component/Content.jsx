import React from 'react';
import "./Components.css";
import Topimg1 from './Images/img1.avif';
import Topimg2 from './Images/img2.avif';
import Topimg3 from './Images/img3.avif';
import Topimg4 from './Images/img4.avif';
import Topimg5 from './Images/img5.avif';
import Topimg6 from './Images/img6.avif';
import Topimg7 from './Images/img7.avif';
import Topimg8 from './Images/img8.avif';
import Topimg9 from './Images/img9.avif';

const Content = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Topimg1} className="d-block w-100" id="image" alt="..." />
                        <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                            <h2>Welcome to Coding Blog</h2>
                            <p>Technology News, Development News and Trends</p>
                            <div className="btn-div d-flex flex-wrap justify-content-center gap-2">
                                <button className="btn btn-danger">Technology</button>
                                <button id='primary' className="btn btn-primary">Web Development</button>
                                <button className="btn btn-success">Tech Fun</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Topimg2} className="d-block w-100" id="image" alt="..." />
                        <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                            <h2>The Best Coding Blog</h2>
                            <p>Technology News, Development News and Trends</p>
                            <div className="btn-div d-flex flex-wrap justify-content-center gap-2">
                                <button className="btn btn-danger">Technology</button>
                                <button id='primary' className="btn btn-primary">Web Development</button>
                                <button className="btn btn-success">Tech Fun</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Topimg3} className="d-block w-100" id="image" alt="..." />
                        <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                            <h2>Award Winning Blog</h2>
                            <p>Technology News, Development News and Trends</p>
                            <div className="btn-div d-flex flex-wrap justify-content-center gap-2">
                                <button className="btn btn-danger">Technology</button>
                                <button  className="btn btn-primary">Web Development</button>
                                <button className="btn btn-success">Tech Fun</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container">
                <div className="row mb-2 my-4">
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-column flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col-auto order-1 order-md-2 d-flex align-items-center">
                                <img src={Topimg4} className="bd-placeholder-img w-100 h-100" alt="" />
                            </div>
                            <div className="col p-4 d-flex flex-column position-static order-2 order-md-1">
                                <strong className="d-inline-block mb-2 text-primary">Learn Popular Language</strong>
                                <h3 className="mb-0">JavaScript Programming</h3>
                                <div className="mb-1 text-body-secondary">2024</div>
                                <p className="card-text mb-auto">
                                    JavaScript is a powerful scripting language used to create dynamic and interactive web pages. It enables developers to add features like animations, form validation, and real-time updates. Essential for modern web development, JavaScript works alongside HTML and CSS.
                                </p>
                                <br />
                                <a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noopener noreferrer" className="icon-link gap-1 icon-link-hover stretched-link">
                                    Continue reading
                                    <svg className="bi">
                                        <use xlinkHref="#chevron-right"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-column flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col-auto d-flex align-items-center order-1 order-md-2">
                                <img src={Topimg5} className="bd-placeholder-img w-100 h-100" alt="" />
                            </div>
                            <div className="col p-4 d-flex flex-column position-static order-2 order-md-1">
                                <strong className="d-inline-block mb-2 text-danger">Learn Popular Language</strong>
                                <h3 className="mb-0">Python Programming</h3>
                                <div className="mb-1 text-body-secondary">2024</div>
                                <p className="card-text mb-auto">
                                    Python is a high-level, interpreted programming language known for its readability and simplicity. With a clean and easy-to-understand syntax, Python is popular among beginners and experts alike for a wide range of applications, including web development, data analysis, artificial intelligence, and automation.
                                </p>
                                <br />
                                <a href="https://www.w3schools.com/python/default.asp" target="_blank" rel="noopener noreferrer" className="icon-link gap-1 icon-link-hover stretched-link">
                                    Continue reading
                                    <svg className="bi">
                                        <use xlinkHref="#chevron-right"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-column flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col-auto d-flex align-items-center order-1 order-md-2">
                                <img src={Topimg6} className="bd-placeholder-img w-100 h-100" alt="" />
                            </div>
                            <div className="col p-4 d-flex flex-column position-static order-2 order-md-1">
                                <strong className="d-inline-block mb-2 text-success">Learn HTML Language</strong>
                                <h3 className="mb-0">HTML Programming</h3>
                                <div className="mb-1 text-body-secondary">2024</div>
                                <p className="card-text mb-auto">
                                    HTML is the standard markup language used to create and design web pages. It provides the fundamental structure for web content through elements like headings, paragraphs, links, and images. Known for its simplicity and ease of use, HTML is essential for building the backbone of websites and is often the first language learned by aspiring web developers. Its clear syntax and foundational role make it a vital tool for web design and development.
                                </p>
                                <br />
                                <a href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noopener noreferrer" className="icon-link gap-1 icon-link-hover stretched-link">
                                    Continue reading
                                    <svg className="bi">
                                        <use xlinkHref="#chevron-right"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-column flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col-auto d-flex align-items-center order-1 order-md-2">
                                <img src={Topimg7} className="bd-placeholder-img w-100 h-100" alt="" />
                            </div>
                            <div className="col p-4 d-flex flex-column position-static order-2 order-md-1">
                                <strong className="d-inline-block mb-2 text-warning">Learn CSS Language</strong>
                                <h3 className="mb-0">CSS Programming</h3>
                                <div className="mb-1 text-body-secondary">2024</div>
                                <p className="card-text mb-auto">
                                    CSS (Cascading Style Sheets) is a powerful stylesheet language used for describing the presentation of web pages. It works alongside HTML to define the visual style of content, including elements like colors, fonts, margins, and layouts. CSS enables developers to create visually engaging and responsive designs, ensuring that websites look good across different devices and screen sizes. CSS is essential for modern web development and design.
                                </p>
                                <br />
                                <a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noopener noreferrer" className="icon-link gap-1 icon-link-hover stretched-link">
                                    Continue reading
                                    <svg className="bi">
                                        <use xlinkHref="#chevron-right"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-column flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col-auto d-flex align-items-center order-1 order-md-2">
                                <img src={Topimg8} className="bd-placeholder-img w-100 h-100" alt="" />
                            </div>
                            <div className="col p-4 d-flex flex-column position-static order-2 order-md-1">
                                <strong className="d-inline-block mb-2 text-info">Learn Bootstrap Language</strong>
                                <h3 className="mb-0">Bootstrap Programming</h3>
                                <div className="mb-1 text-body-secondary">2024</div>
                                <p className="card-text mb-auto">
                                    Bootstrap is a front-end framework for creating responsive, mobile-first web pages. It offers pre-designed, customizable components like navbars, buttons, and forms, and its grid system ensures flexible layouts for any device. With extensive documentation and utilities, Bootstrap is a popular choice for web development.
                                </p>
                                <br />
                                <a href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp" target="_blank" rel="noopener noreferrer" className="icon-link gap-1 icon-link-hover stretched-link">
                                    Continue reading
                                    <svg className="bi">
                                        <use xlinkHref="#chevron-right"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-column flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col-auto d-flex align-items-center order-1 order-md-2">
                                <img src={Topimg9} className="bd-placeholder-img w-100 h-100" alt="" />
                            </div>
                            <div className="col p-4 d-flex flex-column position-static order-2 order-md-1">
                                <strong className="d-inline-block mb-2 text-primary-emphasis">Learn React Language</strong>
                                <h3 className="mb-0">React Programming</h3>
                                <div className="mb-1 text-body-secondary">2024</div>
                                <p className="card-text mb-auto">
                                    React is a popular JavaScript library for building user interfaces, especially single-page applications. Developed by Facebook, it uses reusable components and a virtual DOM for high performance and efficient updates. Its declarative approach makes designing interactive UIs easier, making it a top choice for modern web development.
                                </p>
                                <br />
                                <a href="https://www.w3schools.com/react/default.asp" target="_blank" rel="noopener noreferrer" className="icon-link gap-1 icon-link-hover stretched-link">
                                    Continue reading
                                    <svg className="bi">
                                        <use xlinkHref="#chevron-right"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Content;
