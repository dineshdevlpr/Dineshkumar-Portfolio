import React from 'react';
//styles
import './aboutmepage.styles.scss';
//custom components
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import AboutMe from '../../components/about-me/about-me.component';
//fixed links
import GithubLink from '../../components/github-link/github-link.component';
import LinkedInLink from '../../components/linkedin-link/linkedin-link.component';
import ResumeLink from '../../components/resume-link/resume-link.component';
//animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animations/framer-animations'; 

const AboutMePage = () => {
    return (
        <motion.section className='aboutme-page' variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <div>
                <Header backgroundSecondary/>
                <div className='fixed-links-aboutme-page'>
                    <GithubLink hoverRight />
                    <LinkedInLink hoverRight />
                    <ResumeLink hoverRight />
                </div>
                <AboutMe/>
            </div>
            <Footer/>
        </motion.section>
    )
}

export default AboutMePage;
