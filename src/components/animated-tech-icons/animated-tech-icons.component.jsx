import React from 'react';
import './animated-tech-icons.styles.scss';
//svg's
import ReactIcon from '../../assets/reactLogo.svg';
import EJSLogo from '../../assets/ejsLogo.svg';
import ExpressJsLogo from '../../assets/expressJsLogo.svg';
import MongoDbLogo from '../../assets/mongodbLogo.svg';
import SQLIcon from '../../assets/sqlLogo.svg';
import JavascriptIcon from '../../assets/javascriptLogo.svg';
import BootstrapLogo from '../../assets/bootstrapLogo.svg';
import Css3Icon from '../../assets/Css3Icon.svg';
import Html5Icon from '../../assets/Html5Icon.svg';
import NodeJSLogo from '../../assets/nodeJsLogo.svg';

//animations
import { motion } from 'framer-motion';
import { techIcons } from '../../animations/framer-animations';

import CircleThick from '../../assets/Circle.svg';

export const AnimatedReactIcon = () => {
    return (
        <motion.div className='circle-container' variants={techIcons}>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={ReactIcon} alt='React Logo' className='icon-inside' />
            <p>REACT JS</p>
        </motion.div>
    )
}

export const AnimatedEJSLogo = () => {
    return (
        <motion.div className='circle-container' variants={techIcons}>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={EJSLogo} alt='EJS Logo' className='icon-inside'/>
            <p>EJS</p>
        </motion.div>
    )
}
export const AnimatedNodeIcon = () => {
    return (
        <motion.div className='circle-container' variants={techIcons}>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={NodeJSLogo} alt='Node Logo' className='icon-inside'/>
            <p>Node JS</p>
        </motion.div>
    )
}

export const AnimatedExpressJsLogo = () => {
    return (
        <motion.div className='circle-container' variants={techIcons}>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={ExpressJsLogo} alt='Express Logo' className='icon-inside'/>
            <p>Express JS</p>
        </motion.div>
    )
}

export const AnimatedMongoDbLogo = () => {
    return (
        <motion.div className='circle-container' variants={techIcons}>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={MongoDbLogo} alt='MongoDb Logo' className='icon-inside'/>
            <p>MongoDb</p>
        </motion.div>
    )
}

export const AnimatedSQLIcon = () => {
    return (
        <motion.div className='circle-container' variants={techIcons}>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={SQLIcon} alt='SQL Logo' className='icon-inside'/>
            <p>SQL</p>
        </motion.div>
    )
}

export const AnimatedJavaScriptIcon = () => {
    return (
        <motion.div className='circle-container' variants={techIcons}>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={JavascriptIcon} alt='JavaScript Logo' className='icon-inside'/>
            <p>JavaScript</p>
        </motion.div>
    )
}

export const AnimatedBootstrapIcon = () => {
    return (
        <motion.div className='circle-container' variants={techIcons}>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={BootstrapLogo} alt='Bootstrap Logo' className='icon-inside'/>
            <p>Bootstrap</p>
        </motion.div>
    )
}

export const AnimatedCss3Icon = () => {
    return (
        <motion.div className='circle-container' variants={techIcons}>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img  src={Css3Icon} alt='Css Logo' className='icon-inside'/>
            <p>Css 3</p>
        </motion.div>
    )
}

export const AnimatedHtml5Icon = () => {
    return (
        <motion.div className='circle-container' variants={techIcons}>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={Html5Icon} alt='Html Logo' className='icon-inside'/>
            <p>Html 5</p>
        </motion.div>
    )
}



