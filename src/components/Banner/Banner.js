import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner_1 from '../../banner/banner-1.jpg';
import banner_2 from '../../banner/banner-2.jpg';
import banner_3 from '../../banner/banner-3.jpg';

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner_1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h4>Living room interior wall mockup in warm tones with leather sofa which is behind the kitchen</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner_2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h4>Modern living room interior with sofa and green plants.</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner_3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h4>Double sofa for TV room.</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;