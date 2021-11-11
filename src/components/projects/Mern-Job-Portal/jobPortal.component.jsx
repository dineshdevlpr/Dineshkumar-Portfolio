import React from 'react';
//styles
import './jobPortal.styles.scss'

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

const JobPortal = ({showJobPortal, setJobPortal}) => {
    return (
        <AnimatePresence exitBeforeEnter>
        {showJobPortal && 
        <motion.div className='backdrop' variants={backdrop} initial="hidden" animate="visible">
            <motion.div className='project-portal' variants={projectContainer} initial="hidden" animate="visible" exit="hidden">
                <div className='screenshot-portal'></div>
                <div className='details'>
                    <div className='x-button' onClick={() => setJobPortal(false)}>
                        <img src={xIcon} alt='exit icon'/>
                    </div>
                    <h2 className='project-title'><span>J</span>ob Portal App</h2>
                    <div className='screenshot-mobile-portal'></div>
                    <div className='tech-stack'>
                        <TechNameBox text={'html 5'} />
                        <TechNameBox text={'css 3'} />
                        <TechNameBox text={'bootstrap'} />
                        <TechNameBox text={'react js'} />
                        <TechNameBox text={'node js'} />
                        <TechNameBox text={'express js'} />
                        <TechNameBox text={'mongoDB'} />
                        <TechNameBox text={'JWT'} />
                    </div>
                    <p className='project-description'>Job Portal MERN App with seperate Portals for Candidates and Recruiters with Token Based Authentication</p>
                    <div className='project-details-buttons'>
                        <CustomButton eye isLink LinkTo='https://jobportal-by-dinesh.netlify.app/' text={'demo'}/>
                        <CustomButton code isLink LinkTo='https://github.com/dineshdevlpr/Job-Portal-React' text={'FE'}/>
                        <CustomButton code isLink LinkTo='https://github.com/dineshdevlpr/Job-Portal-Backend' text={'BE'}/>
                    </div>
                </div>
                
            </motion.div>
        </motion.div>
        }
        </AnimatePresence>
    )
}

export default JobPortal;