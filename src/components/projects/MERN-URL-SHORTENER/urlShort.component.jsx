import React from 'react';
//styles
import './urlShort.styles.scss';

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

const UrlShort = ({showUrlShort, setUrlShort}) => {
    return (
        <AnimatePresence exitBeforeEnter>
        {showUrlShort && 
        <motion.div className='backdrop' variants={backdrop} initial="hidden" animate="visible">
            <motion.div className='url-short' variants={projectContainer} initial="hidden" animate="visible" exit="hidden">
                <div className='screenshot'></div>
                <div className='details'>
                    <div className='x-button' onClick={() => setUrlShort(false)}>
                        <img src={xIcon} alt='exit icon'/>
                    </div>
                    <h2 className='project-title'><span>U</span>RL Shortener</h2>
                    <div className='screenshot-mobile'></div>
                    <div className='tech-stack'>
                        <TechNameBox text={'html 5'} />
                        <TechNameBox text={'css 3'} />
                        <TechNameBox text={'bootstrap'} />
                        <TechNameBox text={'react js'} />
                        <TechNameBox text={'node js'} />
                        <TechNameBox text={'express js'} />
                        <TechNameBox text={'mongoDB'} />
                    </div>
                    <p className='project-description'>This is an URL Shortener App, that features functionalities like authentication with two step activation, Creating and Viewing Short-Urls and storing the user credentials and url data to MongoDB with Node Js as Backend Language. </p>
                    <div className='project-details-buttons'>
                            <CustomButton eye isLink LinkTo='https://createshorturl.netlify.app/' text={'demo'}/>
                            <CustomButton code isLink LinkTo='https://github.com/dineshdevlpr/URL-Shortener-React' text={'FE'}/>
                            <CustomButton code isLink LinkTo='https://github.com/dineshdevlpr/URL-shortener-Backend' text={'BE'}/>
                    </div>
                </div>
                
            </motion.div>
        </motion.div>
        }
        </AnimatePresence>
    )
}

export default UrlShort;