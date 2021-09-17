import React from 'react';
//styles
import './keeper.styles.scss'

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

const Keeper = ({showKeeper, setKeeper}) => {
    return (
        <AnimatePresence exitBeforeEnter>
        {showKeeper && 
        <motion.div className='backdrop' variants={backdrop} initial="hidden" animate="visible">
            <motion.div className='project-keeper' variants={projectContainer} initial="hidden" animate="visible" exit="hidden">
                <div className='screenshot-keeper'></div>
                <div className='details'>
                    <div className='x-button' onClick={() => setKeeper(false)}>
                        <img src={xIcon} alt='exit icon'/>
                    </div>
                    <h2 className='project-title'><span>K</span>eeper App</h2>
                    <div className='screenshot-mobile-keeper'></div>
                    <div className='tech-stack'>
                        <TechNameBox text={'html 5'} />
                        <TechNameBox text={'css 3'} />
                        <TechNameBox text={'react'} />
                    </div>
                    <p className='project-description'>This is an app which lets users to add notes along with title</p>
                    <div className='project-details-buttons'>
                        <CustomButton eye isLink LinkTo='https://notes-keeper-reactjs.netlify.app/' text={'demo'}/>
                        <CustomButton code isLink LinkTo='https://github.com/dineshdevlpr/keeper-app' text={'code'}/>
                    </div>
                </div>
                
            </motion.div>
        </motion.div>
        }
        </AnimatePresence>
    )
}

export default Keeper;