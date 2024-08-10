import React from 'react'
import img10 from './Images/img10.avif'
import img11 from './Images/img11.avif'
import img12 from './Images/img12.avif'

function About(){
    return (
        <>
            <div className="container my-4">
                <div className="row featurette d-flex justify-content-center align-items-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">
                            It all started with Coding Blog's Idea. <span className="text-body-secondary">It will blow your mind.</span>
                        </h2>
                        <p className="lead">
                            <br />
                            Welcome to our Coding Blog! Here, we learn about coding, which is like telling a computer what to do. We have fun lessons, simple projects, and cool ideas to help you start your coding journey. Whether you want to make a game or a website, our blog is here to help you learn and have fun with coding!
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="img-fluid" src={img10} alt="" />
                    </div>
                </div>
                <br />
                <div className="row featurette d-flex justify-content-center align-items-center">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">
                            We started Coding Blog in 2024. <span className="text-body-secondary">It will blow your mind.</span>
                        </h2>
                        <br />
                        <p className="lead">
                            We’re excited to launch our new coding blog, where we’ll dive into the latest in web development, share tutorials, and explore new technologies. Whether you’re a beginner or a seasoned pro, we aim to provide valuable insights and hands-on tips to help you grow your skills and stay updated in the ever-evolving world of coding. Join us on this journey as we build, learn, and innovate together!
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="img-fluid" src={img11} alt="" />
                    </div>
                </div>
                <br />
                <div className="row featurette d-flex justify-content-center align-items-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">
                            Purpose of Coding Blog <span className="text-body-secondary">More About our Blogging</span>
                        </h2>
                        <br />
                        <p className="lead">
                            Our goal is to create a supportive community where developers of all levels can learn, share, and grow together. We provide clear tutorials and guides on various programming languages and frameworks, share innovative project ideas, and keep you informed about the latest trends and best practices in the tech industry. Join us as we explore the fascinating world of coding, tackle new challenges, and build a brighter future through technology.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="img-fluid" src={img12   } alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
