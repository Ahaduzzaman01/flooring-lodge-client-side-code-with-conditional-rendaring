import React from 'react';
import aboutPartImg from '../../../images/about-part.jpg';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <section className='row m-auto align-items-center p-5 mt-5 mb-4'>
            <div className="col-md-6 offset-md-1 about-text-container">
                <h1>What We Offer</h1>
                <p className="pt-4">Since 2005, Flooring has been refinishing floors, installing flooring &
                repairing flooring in New York. The foundation of our reputation is our
                craftsmanship and integrity. Our floors are walked on, danced on, played on
                and most importantly lived on.</p>
                <p>Our services include floor installations, carpet Installation and floor repair</p>
            </div>

            <div className="col-md-4 about-img">
                <div className="about-img-box">
                    <img src={aboutPartImg} alt="" className="img-fluid" />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;