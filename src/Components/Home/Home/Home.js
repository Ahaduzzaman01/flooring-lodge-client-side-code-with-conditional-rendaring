import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutUs></AboutUs>
            <Services></Services>
            <Projects></Projects>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;