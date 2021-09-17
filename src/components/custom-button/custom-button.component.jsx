import React from 'react';
//styles
import './custom-button.styles.scss';
//svgs
import {ReactComponent as EyeIcon } from '../../assets/eyeIcon.svg';
import {ReactComponent as CodeIcon } from '../../assets/CodeIcon.svg';
import { Link } from 'react-router-dom';

const CustomButton = ({text, center, eye, code, isLink, LinkTo, ...otherProps}) => {
    return (
        isLink
        ?
        <Link className='link-to-project' to={{pathname: `${LinkTo}` }} target="_blank" >
        <button className={center ? 'custom-button center' : 'custom-button'}{...otherProps}>
            {eye && <EyeIcon className='eye-icon'/>}
            {code && <CodeIcon className='code-icon' />}
            {text}
        </button>
        </Link> 
        :
        <button className={center ? 'custom-button center' : 'custom-button'}{...otherProps}>
            {eye && <EyeIcon className='eye-icon'/>}
            {code && <CodeIcon className='code-icon' />}
            {text}
        </button>
    )
}

export default CustomButton;
