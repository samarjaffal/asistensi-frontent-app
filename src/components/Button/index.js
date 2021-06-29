import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Button = ({ text = "Apply for card", onClick, color = "white", type = "button" }) => {
    return (
        <div className={`SimpleButton ${color ? color : ''}`}>
            <button type={type} onClick={() => onClick()}>{text}</button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.string
}