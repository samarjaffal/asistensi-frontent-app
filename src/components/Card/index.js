import React from 'react';
import PropTypes from 'prop-types';
import VisaLogo from '../../images/Visa_Logo.png';
import './style.css';

export const Card = ({ color = "purple", number = "2671 9860 8300 0202", exp = "06/16", user = "David Guetta" }) => {
    return (
        <div className="CardContainer">
            <div className={`Card ${color}`}>
                <div className="CardLogo">
                    <img src={VisaLogo} alt="Card Logo" />
                </div>
                <div className="CardChip"></div>
                <div className="CardNumber">{number}</div>
                <div className="CardExp">{exp}</div>

                <div className="CardUser">{user}</div>
            </div>
        </div>
    )
}

Card.propTypes = {
    color: PropTypes.string,
    number: PropTypes.string,
    exp: PropTypes.string,
    user: PropTypes.string
}