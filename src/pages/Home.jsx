import React from 'react';
import Banner from './Banner';
import About from './About';
import Service from './Service';
// import Skills from './Skills';
// import LatestWork from './LatestWork';
import ContactSection from './ContactSection';
import PortfolioSection from '../components/PortfolioSection';
import SkillsSections from '../components/SkillsSections';


const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <About></About>
            <Service></Service>
            <SkillsSections></SkillsSections>
            {/* <Skills></Skills> */}
            {/* <LatestWork></LatestWork> */}
            <PortfolioSection></PortfolioSection>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;