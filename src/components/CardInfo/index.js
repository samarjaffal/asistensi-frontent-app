import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const CardInfo = ({ title, description, svgIcon, active, color }) => {
    return (
        <div className={`CardInfo ${active ? 'active' : ''}`}>
            <div className={`CardInfoIconContainer ${color ? color : ''}`}>
                <img src={svgIcon} alt="Card Info Icon" />
            </div>
            <div className="CardInfoContent">
                <div className="CardInfoTitle">
                    <h5>{title || 'Lorem ipsum dolor'}</h5>
                </div>
                <p>
                    {description || ''}
                </p>
            </div>
        </div>
    )
}

CardInfo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    svgIcon: PropTypes.string,
    active: PropTypes.bool,
    color: PropTypes.string
}