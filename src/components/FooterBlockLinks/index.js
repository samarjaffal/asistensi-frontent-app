import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const FooterBlockLinks = ({ title = "", children }) => {
    return (
        <div className="FooterBlockLink">
            <div className="BlockTitle">{title}</div>
            {children}
        </div>
    )
}

FooterBlockLinks.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
}