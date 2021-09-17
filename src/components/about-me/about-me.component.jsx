import React from 'react';
//styles
import './about-me.styles.scss';
//Animated Tech Icons 
import { AnimatedReactIcon, AnimatedEJSLogo, AnimatedExpressJsLogo, AnimatedMongoDbLogo, AnimatedSQLIcon, AnimatedJavaScriptIcon, AnimatedBootstrapIcon, AnimatedCss3Icon, AnimatedHtml5Icon, AnimatedNodeIcon } from '../animated-tech-icons/animated-tech-icons.component';
//components
import SectionWave from '../section-wave/section-wave.component';
import ProfficientWithArrow from '../profficient-with-arrow/profficient-with-arrow.component';
//animations
import { motion } from 'framer-motion';
import { techIconsContainer, fadeInOut } from '../../animations/framer-animations';
import { useScroll } from '../../animations/useScroll';

const AboutMe = () => {
    const [element, controls] = useScroll();
    return (
        <section className='about-me'>
                <motion.div className='section-title' variants={fadeInOut} initial="hidden" animate={controls} ref={element}>
                    <h2>About <span>Me</span></h2>
                </motion.div>
            <motion.div className='grids'>
                <motion.div className='content-text' variants={techIconsContainer} initial="hidden" animate={controls} ref={element}>
                    <motion.div className='content-area grid-area-2' variants={fadeInOut} >
                        <p>Hello! My name is DINESHKUMAR K and I am a Full Stack Developer with a demonstrated history of working in MERN Stack projects. Skilled in HTML, CSS, Bootstrap, JavaScript, MERN and AWS. A Better problem solver holding Strong professional skills with a Bachelor of Engineering.</p>
                    </motion.div>
                </motion.div>
                <ProfficientWithArrow className='text-and-arrow'/>
                <motion.div className='grid-icons-container' variants={techIconsContainer} initial="hidden" animate={controls} ref={element}>
                    
                <AnimatedHtml5Icon className='html5-icon'/>
                <AnimatedCss3Icon className='css3-icon'/>
                <AnimatedBootstrapIcon className='bootstrap-icon'/>
                <AnimatedJavaScriptIcon className='javascript-icon'/>
                <AnimatedReactIcon className='react-icon'/>
                <AnimatedExpressJsLogo className='express-icon'/>
                <AnimatedNodeIcon className='node-icon'/>
                <AnimatedEJSLogo className='npm-icon'/>
                <AnimatedMongoDbLogo className='mongodb-icon'/>
                <AnimatedSQLIcon className='sql-icon'/>
                </motion.div>
                
            </motion.div>
            <SectionWave secondary/>
        </section>
    )
}

export default AboutMe;