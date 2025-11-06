import React from 'react';
import Banner from './Banner';
import About from './About';
import Service from './Service';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <About></About>
            <Service></Service>
            <Skills></Skills>
        </div>
    );
};

export default Home;