import React from 'react';
//styles
import "./expTrack.scss";

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

const ExpTrack = ({showExpTrack, setExpTrack}) => {
    return (
        <AnimatePresence exitBeforeEnter>
        {showExpTrack && 
        <motion.div className='backdrop' variants={backdrop} initial="hidden" animate="visible">
            <motion.div className='exp-track' variants={projectContainer} initial="hidden" animate="visible" exit="hidden">
                <div className='screenshot'></div>
                <div className='details'>
                    <div className='x-button' onClick={() => setExpTrack(false)}>
                        <img src={xIcon} alt='exit icon'/>
                    </div>
                    <h2 className='project-title'><span>E</span>xpense Tracker</h2>
                    <div className='screenshot-mobile'></div>
                    <div className='tech-stack'>
                        <TechNameBox text={'html 5'} />
                        <TechNameBox text={'css 3'} />
                        <TechNameBox text={'react js'} />
                        <TechNameBox text={'node js'} />
                        <TechNameBox text={'express js'} />
                        <TechNameBox text={'mongoDB'} />
                    </div>
                    <p className='project-description'>This is an simple Expense-Tracker App which is build using MERN stack frameworks. It stores the data in MongoDb and the user can add or remove the expense data.</p>
                    <div className='project-details-buttons'>
                            <CustomButton eye isLink LinkTo='https://expense-tracker-appp.netlify.app/' text={'demo'}/>
                            <CustomButton code isLink LinkTo='https://github.com/dineshdevlpr/Expense-Tracker-React' text={'FE'}/>
                            <CustomButton code isLink LinkTo='https://github.com/dineshdevlpr/expense-tracker-node' text={'BE'}/>
                    </div>
                </div>
                
            </motion.div>
        </motion.div>
        }
        </AnimatePresence>
    )
}

export default ExpTrack;