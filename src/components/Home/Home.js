import React from 'react';
import Footer from '../../shared/Footer/Footer';
import ContactUs from './ContactUs/ContactUs';
import Slider from './Slider/Slider';
import Subjects from './Subjects/Subjects';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Subjects></Subjects>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;