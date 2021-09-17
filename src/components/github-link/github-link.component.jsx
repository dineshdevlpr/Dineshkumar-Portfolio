import React from 'react';
import './github-link.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as GitHubLogo } from '../../assets/githubLogo.svg';

const GithubLink = ({hoverRight}) => {
    return (
            <Link className='github-link-wrapper' to={{pathname: 'https://github.com/dineshdevlpr' }} target="_blank" >
                <div className={`${hoverRight ? 'github-link-container hover-right' : 'github-link-container'}`}>
                    <p className='github-link-content'>Github</p>
                    <GitHubLogo className='github-logo'/>
                </div>
            </Link> 
    )
}

export default GithubLink;
