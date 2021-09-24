import React from 'react';
import './resume-link.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as ResumeIcon } from '../../assets/ResumeIcon.svg';

const ResumeLink = ({hoverRight}) => {
    return (
        <Link className='resume-link-wrapper' to={{pathname: 'https://drive.google.com/file/d/1cW1Sdn1mc2pPvzlXJF6BRfK6CNryxZoY/view?usp=sharing' }} target="_blank" >
                <div className={`${hoverRight ? 'resume-link-container hover-right' : 'resume-link-container'}`}>
                    <p className='resume-link-content'>Resume</p>
                    <ResumeIcon className='resume-logo'/>
                </div>
            </Link> 
    )
}

export default ResumeLink;