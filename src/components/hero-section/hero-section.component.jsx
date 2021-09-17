import React from 'react';
//styles
import './hero-section.styles.scss'
//components
import Header from '../header/header.component';
import SectionWave from '../section-wave/section-wave.component';
import GithubLink from '../github-link/github-link.component';
import LinkedInLink from '../linkedin-link/linkedin-link.component';
import ResumeLink from '../resume-link/resume-link.component';
//animated svg paths
import { HeroSectionWaveAnimation, HeroSectionWaveAnimationMobile } from '../../components/hero-section-wave-animation/hero-section-wave-animation.component';
import MyImage from '../../assets/MyPhoto.jpg';
//animations
import { motion } from 'framer-motion';
import { heroTextAnimation, heroTextContainer, heroImageAnimations, leftLinksAnimations } from '../../animations/framer-animations';



const HeroSection = () => {
    return (
        <section className='hero-component'>
        <Header/>
        <div className='hero-section'>
            <div className='content-container'>
                <motion.div className='content' variants={heroTextContainer} initial="hidden" animate="show">
                    <motion.p className='p-hello' variants={heroTextAnimation}>hello, I'm</motion.p>
                    <motion.h1 variants={heroTextAnimation}>DINESHKUMAR K</motion.h1>
                    <motion.p className='p-front' variants={heroTextAnimation}>Full Stack Developer</motion.p>
                    <motion.Link className='hero-section-button' to='/projects' variants={heroTextAnimation}>view projects</motion.Link>
                </motion.div>
            </div>
            <div className='hero-image-container'>
                <motion.img className='hero-image' src={MyImage} alt='Dineshkumar K - website owner and creator' variants={heroImageAnimations} initial="hidden" animate="show"/>
            </div>
        </div>
        
        <HeroSectionWaveAnimation secondary/>
        <HeroSectionWaveAnimation/>
        <HeroSectionWaveAnimationMobile/>
        
        
        <motion.div className='fixed-links' variants={leftLinksAnimations} initial="hidden" animate="show">
            <GithubLink hoverRight variants={leftLinksAnimations}/>
            <LinkedInLink hoverRight variants={leftLinksAnimations}/>
            <ResumeLink hoverRight variants={leftLinksAnimations}/>
        </motion.div>
        <SectionWave className='section-wave-hero'/>
        </section>
    )
}

export default HeroSection;