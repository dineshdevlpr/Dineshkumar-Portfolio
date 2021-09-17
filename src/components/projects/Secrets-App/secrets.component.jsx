import React from 'react';
//styles
import './secrets.styles.scss';
//svg
import xIcon from '../../../assets/xIcon.svg';
//framer-motion
import { motion, AnimatePresence } from 'framer-motion';
//custom components
import TechNameBox from '../../tech-name-box/tech-name-box.component';
import CustomButton from '../../custom-button/custom-button.component';

const backdrop = {
    visible: {opacity: 1},
    hidden: {opacity: 0}
}
const projectContainer = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {delay: 0.5}
    }
    
}

const Secrets = ({ showSecretsProject, setSecretsProject }) => {
    return (
        <AnimatePresence exitBeforeEnter>
        {showSecretsProject && 
        <motion.div className='backdrop' variants={backdrop} initial="hidden" animate="visible">
            <motion.div className='project-secrets' variants={projectContainer} initial="hidden" animate="visible" exit="hidden">
                <div className='screenshot-secrets'></div>
                <div className='details'>
                    <div className='x-button' onClick={() => setSecretsProject(false)}>
                        <img src={xIcon} alt='exit icon'/>
                    </div>
                    <h2 className='project-title'><span>S</span>ecrets<span>A</span>pp - share your secrets anonymously</h2>
                    <div className='screenshot-mobile-secrets'></div>
                    <div className='tech-stack'>
                        <TechNameBox text={'Html 5'} />
                        <TechNameBox text={'Css 3'} />
                        <TechNameBox text={'Node Js'} />
                        <TechNameBox text={'Express'} />
                        <TechNameBox text={'EJS'} />
                        <TechNameBox text={'MongoDB'} />
                    </div>
                    <p className='project-description'>This Project lets the users to register/login into this website. Once the user is registered, not only they can submit any secret anonymously but also they can be able to view secrets submitted by other random people</p>
                    <div className='project-details-buttons'>
                        <CustomButton eye isLink LinkTo='https://secrets-appp.herokuapp.com/' text={'demo'}/>
                        <CustomButton code isLink LinkTo='https://github.com/dineshdevlpr/Secrets-App' text={'code'}/>
                    </div>
                </div>
                
            </motion.div>
        </motion.div>
        }
        </AnimatePresence>
    )
}

export default Secrets ;