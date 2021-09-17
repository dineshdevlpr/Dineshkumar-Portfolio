import React from 'react';
//styles
import './contactmepage.styles.scss';
//custom components
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import ContactSection from '../../components/contact-section/contact-section.component';
//fixed links
import GithubLink from '../../components/github-link/github-link.component';
import LinkedInLink from '../../components/linkedin-link/linkedin-link.component';
import ResumeLink from '../../components/resume-link/resume-link.component';
//animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animations/framer-animations'; 

const ContactMePage = () => {
    return (
        <motion.section className='contactme-page' variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <div>
                <Header backgroundSecondary/>
                <div className='fixed-links-contact-page'>
                    <GithubLink hoverRight />
                    <LinkedInLink hoverRight />
                    <ResumeLink hoverRight />
                </div>
                <ContactSection/>
                
            </div>
            <Footer/>
        </motion.section>
    )
}

export default ContactMePage;