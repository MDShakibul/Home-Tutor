import React from 'react';
import Footer from '../../shared/Footer/Footer';
import './About.css'

const About = () => {
    return (
        <div>
            <div className='d-flex justify-content-center about-container'>
                <img src="https://i.ibb.co/TRwZG6F/39941513.jpg" alt="" />
            </div>
            <p className='w-75 mt-3' style={{ margin: "0 auto" }}>My name is MD Shakibul Islam. My dream is to be a good full stock developer. I promise to work hard for it. No matter how hard I try to reach my goal, I will never give up. The thing that the mind seeks with the soul is finally on the doorstep of the goal. So one day I too will be on the doorstep of my goal In sha Allah.</p>
            
            <div className='blog'>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default About;