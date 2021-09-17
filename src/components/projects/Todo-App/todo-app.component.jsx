import React from 'react';
//styles
import './todo-app.styles.scss';
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

const TodoApp = ({ showTodoProject, setTodoProject }) => {
    return (
        <AnimatePresence exitBeforeEnter>
        {showTodoProject && 
        <motion.div className='backdrop' variants={backdrop} initial="hidden" animate="visible">
            <motion.div className='project-todo' variants={projectContainer} initial="hidden" animate="visible" exit="hidden">
                <div className='screenshot-todo'></div>
                <div className='details'>
                    <div className='x-button' onClick={() => setTodoProject(false)}>
                        <img src={xIcon} alt='exit icon'/>
                    </div>
                    <h2 className='project-title'><span>T</span>oDo App - React</h2>
                    <div className='screenshot-mobile-portfolio'></div>
                    <div className='tech-stack'>
                        <TechNameBox text={'html 5'} />
                        <TechNameBox text={'CSS 3'} />
                        <TechNameBox text={'React JS'} />
                    </div>
                    <p className='project-description'>This one is a small React Todo application.</p>
                    <div className='project-details-buttons'>
                        <CustomButton eye isLink LinkTo='https://react-todo-crudapp.netlify.app/' text={'demo'}/>
                        <CustomButton code isLink LinkTo='https://github.com/dineshdevlpr/react-todo' text={'code'}/>
                    </div>
                </div>
                
            </motion.div>
        </motion.div>
        }
        </AnimatePresence>
    )
}

export default TodoApp
