import React from 'react';
//styles
import './tic-tac-toe.styles.scss';
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

const TicTacToe = ({showTicTacToe, setTicTacToe}) => {
    return (
        <AnimatePresence exitBeforeEnter>
        {showTicTacToe && 
        <motion.div className='backdrop' variants={backdrop} initial="hidden" animate="visible">
            <motion.div className='project-tic-tac-toe' variants={projectContainer} initial="hidden" animate="visible" exit="hidden">
                <div className='screenshot-tic-tac-toe'></div>
                <div className='details'>
                    <div className='x-button' onClick={() => setTicTacToe(false)}>
                        <img src={xIcon} alt='exit icon'/>
                    </div>
                    <h2 className='project-title'><span>T</span>ic Tac Toe</h2>
                    <div className='screenshot-mobile-tic-tac-toe'></div>
                    <div className='tech-stack'>
                        <TechNameBox text={'html 5'} />
                        <TechNameBox text={'css 3'} />
                        <TechNameBox text={'react JS'} />
                    </div>
                    <p className='project-description'>This is a simple Tic Tac Toe app created using React Js.</p>
                    <div className='project-details-buttons'>
                            <CustomButton eye isLink LinkTo='https://xo-tic-tac-toe.netlify.app/' text={'demo'}/>
                            <CustomButton code isLink LinkTo='https://github.com/dineshdevlpr/Tik-Tak-Toe-React' text={'code'}/>
                    </div>
                </div>
                
            </motion.div>
        </motion.div>
        }
        </AnimatePresence>
    )
}

export default TicTacToe