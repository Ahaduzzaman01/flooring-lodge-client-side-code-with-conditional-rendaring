import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import './TestimonialCard.css'
import starIcon from '../../../images/icons/star.png'

const testimonialCard = ({ testimonial }) => {
    return (
        <div className="col-md-4 col-sm-6 detail-card p-3 shadow testimonial-card mx-4">
            <img src={testimonial.photoURL} alt="" />
            <div className="testimonial-text-wrapper">
                <div className='text-start'>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <h5>{testimonial.name}</h5>
                <p><small>{testimonial.description}</small></p>
                <div className="rating">
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                </div>
                <div className='text-end'>
                    <FontAwesomeIcon icon={faQuoteRight} />
                </div>
            </div>
        </div>
    );
};

export default testimonialCard;