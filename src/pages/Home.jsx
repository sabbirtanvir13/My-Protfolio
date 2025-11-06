import React from 'react';
import Banner from './Banner';
import About from './About';
import Service from './Service';
import Skills from './Skills';
import LatestWork from './LatestWork';
import ContactSection from './ContactSection';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <About></About>
            <Service></Service>
            <Skills></Skills>
            <LatestWork></LatestWork>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;