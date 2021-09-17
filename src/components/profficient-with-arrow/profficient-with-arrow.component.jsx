import React from 'react';
import './profficient-with-arrow.styles.scss';
import Arrow from '../../assets/arrow2.png';
//animations
import {motion} from 'framer-motion';
import {fadeInLeft} from '../../animations/framer-animations';

const ProfficientWithArrow = () => (
    <motion.div className='profficient-with-arrow' variants={fadeInLeft}>
        <img src={Arrow} alt='arrow'/>    
        <p>Proficient With</p>
    </motion.div>
)

export default ProfficientWithArrow;