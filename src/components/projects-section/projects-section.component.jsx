import React, { useState } from 'react';
//styles
import './projects-section.styles.scss';
//wave svg
import SectionWave from '../section-wave/section-wave.component';
//components
import CustomButton from '../custom-button/custom-button.component';
import UrlShort from '../projects/MERN-URL-SHORTENER/urlShort.component';
import Secrets from '../projects/Secrets-App/secrets.component';
import TicTacToe from '../projects/Tic-Tac-Toe-App/tic-tac-toe.component';
import TodoApp from '../projects/Todo-App/todo-app.component';
import Keeper from '../projects/Notes-Keeper/keeper.component';
import ExpTrack from '../projects/Mern-Expense-Tracker/expTrack.component';
//animations
import { motion } from 'framer-motion';
import { projectsContainer, fadeInOut } from '../../animations/framer-animations';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const ProjectsSection = () => {

    const [showUrlShort, setUrlShort] = useState(false);
    const [showExpTrack, setExpTrack] = useState(false);
    const [showSecretsProject, setSecretsProject] = useState(false);
    const [showTicTacToe, setTicTacToe] = useState(false);
    const [showTodoProject, setTodoProject] = useState(false);
    const [showKeeper, setKeeper] = useState(false);


    const controls = useAnimation();
    const [element, view] = useInView({threshold: 0.3})

    if (view) {
        controls.start("show");
    } 
    
    return (
        <section className='projects-section'>
            <motion.h2 variants={fadeInOut} initial="hidden" animate={controls} ref={element}><span>P</span>rojects</motion.h2>
            <motion.p variants={fadeInOut} initial="hidden" animate={controls} ref={element}>These are my favorite projects I've worked. Have a look around!</motion.p>
            <motion.div className='grid-container' variants={projectsContainer} initial="hidden" animate={controls} ref={element}>
                <motion.div className='URL-Shortener' variants={fadeInOut}>
                    <p className='preview-title'>URL Shortener</p>
                    <CustomButton text='View Project' eye onClick={() => setUrlShort(!showUrlShort)}/>
                </motion.div>
                <motion.div className='Expense-Tracker' variants={fadeInOut}>
                    <p className='preview-title'>Expense Tracker</p>
                    <CustomButton text='View Project' eye onClick={() => setExpTrack(!showExpTrack)}/>
                </motion.div>
                <motion.div className='secrets' variants={fadeInOut}>
                    <p className='preview-title'>Secrets - App</p>
                    <CustomButton text='View Project' eye onClick={() => setSecretsProject(!showSecretsProject)}/>
                </motion.div>
                <motion.div className='tic-tac-toe' variants={fadeInOut}>
                    <p className='preview-title'>Tic Tac Toe</p>
                    <CustomButton text='View Project' eye onClick={() => setTicTacToe(!showTicTacToe)}/>
                </motion.div>
                <motion.div className='todo-app' variants={fadeInOut}>
                    <p className='preview-title'>ToDo - React App</p>
                    <CustomButton text='View Project' eye onClick={() => setTodoProject(!showTodoProject)}/>
                </motion.div>
                <motion.div className='keeper' variants={fadeInOut}>
                    <p className='preview-title'>Keeper App</p>
                    <CustomButton text='View Project' eye onClick={() => setKeeper(!showKeeper)}/>
                </motion.div>
            </motion.div>

            <UrlShort showUrlShort={showUrlShort} setUrlShort={setUrlShort}/>
            <ExpTrack showExpTrack={showExpTrack} setExpTrack={setExpTrack}/>
            <Secrets showSecretsProject={showSecretsProject} setSecretsProject={setSecretsProject}/>
            <TicTacToe showTicTacToe={showTicTacToe} setTicTacToe={setTicTacToe}/>
            <TodoApp showTodoProject={showTodoProject} setTodoProject={setTodoProject}/>
            <Keeper showKeeper={showKeeper} setKeeper={setKeeper}/>
            <SectionWave />
        </section>
    )
}

export default ProjectsSection;