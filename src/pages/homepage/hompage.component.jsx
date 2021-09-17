import React from 'react';
//styles
import './hompage.component.scss';
//components
import HeroSection from '../../components/hero-section/hero-section.component';
import AboutMe from '../../components/about-me/about-me.component';
import ProjectsSection from '../../components/projects-section/projects-section.component';
import ContactSection from '../../components/contact-section/contact-section.component';
import Footer from '../../components/footer/footer.component';
//animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animations/framer-animations'; 


const HomePage = () => {
    
    return (
        <div className='homepage' >
            <motion.div className='content' variants={pageAnimation} initial='hidden' animate='show' exit='exit'/>
                <HeroSection />
                <AboutMe />
                <ProjectsSection />
                <ContactSection />
            <Footer/>
        </div>
    )
}

export default HomePage;