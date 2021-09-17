import React from 'react';
//styles
import './tech-name-box.styles.scss';

const TechNameBox = ({ text }) => {
    return (
        <div className='tech-name-box'>
            {text}
        </div>
    )
}

export default TechNameBox;