import React from 'react';
import Banner from './Banner';
import About from './About';
import Service from './Service';
// import Skills from './Skills';
// import LatestWork from './LatestWork';
import ContactSection from './ContactSection';
import PortfolioSection from '../components/PortfolioSection';
import SkillsSections from '../components/SkillsSections';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import CertificationsSection from '../components/CertificationsSection';


const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <About></About>
           <ExperienceSection></ExperienceSection>
            <Service></Service>
            <SkillsSections></SkillsSections>
            {/* <Skills></Skills> */}
            {/* <LatestWork></LatestWork> */}
            <PortfolioSection></PortfolioSection>
            <EducationSection></EducationSection>
            <CertificationsSection></CertificationsSection>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;