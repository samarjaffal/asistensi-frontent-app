import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'wouter';
import { useAuth } from '../../hooks/useAuth';
import './style.css';


export const Layout = ({ children, title }) => {
    const [, setLocation] = useLocation();
    const { logout, isAuth } = useAuth();

    return (
        <>
            {
                isAuth && (
                    <div className="LayoutHeader">
                        <button className="LayoutHeaderItem" onClick={() => setLocation('/users')}>Users</button>
                        <button className="LayoutHeaderItem LogoutButton" onClick={logout}>Logout</button>
                    </div>

                )
            }

            <div className="Container">
                <h1>{title}</h1>
                {children}
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string
}