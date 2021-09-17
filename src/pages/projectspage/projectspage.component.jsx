import React from 'react';
//styles
import './projectspage.styles.scss';
//custom components
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import ProjectsSection from '../../components/projects-section/projects-section.component';
//fixed links
import GithubLink from '../../components/github-link/github-link.component';
import LinkedInLink from '../../components/linkedin-link/linkedin-link.component';
import ResumeLink from '../../components/resume-link/resume-link.component';
//animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animations/framer-animations'; 


const ProjectsPage = () => {
    return (
        <motion.section className='projects-page' variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <div>
                <Header backgroundPrimary/>
                <div className='fixed-links-projects-page'>
                    <GithubLink hoverRight />
                    <LinkedInLink hoverRight />
                    <ResumeLink hoverRight />
                </div>
                <ProjectsSection/>
            </div>
            <Footer backgroundSecondary/>
        </motion.section>
    )
}

export default ProjectsPage;
