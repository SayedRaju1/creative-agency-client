import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Works.css'

import carouselImg1 from '../../../../src/images/carousel-1.png'
import carouselImg2 from '../../../../src/images/carousel-2.png'
import carouselImg4 from '../../../../src/images/carousel-5.png'


const Works = () => {
    return (
        <div className="works-container">
            <div className="p-3 pt-5">
                <h1 className="text-center text-white section-header">Here are some of  <span className="services-span">our works</span></h1>
            </div>
            <div>
                <Carousel className="py-5">
                    <Carousel.Item className="p-2 carousal-item">
                        <img
                            className="d-block carousal-img m-auto"
                            src={carouselImg1} alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="p-2 carousal-item">
                        <img
                            className="d-block carousal-img m-auto"
                            src={carouselImg2}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item className="p-2 carousal-item">
                        <img
                            className="d-block carousal-img  m-auto"
                            src={carouselImg4}
                            alt="Third slide"
                        />


                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
};

export default Works;