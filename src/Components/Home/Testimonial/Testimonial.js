import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';


const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('https://infinite-waters-92433.herokuapp.com/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])


    return (
        <section className="text-center mt-5 pb-5 pt-5" style={{ backgroundColor: "#2278560d" }}>
            <div className="pt-3">
                <h2 style={{ color: 'dimGrey' }}>What Our Customers Are Saying</h2>
            </div>

            <div className="row w-75 m-auto mt-4 mb-5">
                {
                    testimonials.map(testimonial => <TestimonialCard testimonial={testimonial}></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;