import React, { useState } from 'react';
//styles
import './header.styles.scss';
//react router dom
import { NavLink } from 'react-router-dom';
//custom components
import BurgerMenuButton from '../burger-menu-button/burger-menu-button.component';
//animations
import { motion } from 'framer-motion';
import { headerAnimations } from '../../animations/framer-animations';

const Header = ({backgroundSecondary, backgroundPrimary}) => {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <motion.nav className={`${backgroundPrimary ? 'nav nav-background-primary' : 'nav'} ${backgroundSecondary ? 'nav nav-background-secondary' : 'nav'}`} variants={headerAnimations} initial="hidden" animate="show">
            <div className='logo'>Portfo<span>lio.</span></div>
            <menu className='menu'>
                <ul className={showLinks ? 'hidden' : ''}>
                    <NavLink to='/' className='header-link' activeStyle={{color: "#fec576"}} exact>Home</NavLink>
                    <NavLink to='/aboutme' className='header-link' activeStyle={{color: "#fec576"}} exact>About Me</NavLink>
                    <NavLink to='/projects' className='header-link' activeStyle={{color: "#fec576"}} exact>Projects</NavLink>
                    <NavLink to='/contact' className='header-link' activeStyle={{color: "#fec576"}} exact>Contact</NavLink>
                </ul>
            </menu>
            <BurgerMenuButton setshowLinks={setShowLinks} showLinks={showLinks}/>
        </motion.nav>
    )
}

export default Header;

