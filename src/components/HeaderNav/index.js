import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from "wouter";
import VisaLogo from '../../images/Visa_Logo.png';
import './style.css';
export const HeaderNav = ({ isMobile = false, isOpenMobileNav, toggleNav }) => {

    useEffect(() => {
    }, [isOpenMobileNav])

    return (
        <nav className={`${isMobile === true ? 'NavMobile' : 'HeaderNav'} ${isOpenMobileNav ? 'open' : ''}`}>
            {isMobile && <button className="NavMobileCloseButton" onClick={toggleNav}>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" /></svg>
            </button>}
            <ul style={{ margin: 0, padding: 0 }}>
                <Link className="link HeaderLogo" href="/">
                    <a className="link HeaderLogo" href="/#"><img src={VisaLogo} alt="Header Brand"></img></a>
                </Link>
                <div className="HeaderNavBlock">
                    <Link href="/">
                        <a className="link" href="/#">Products</a>
                    </Link>
                    <Link href="#">
                        <a className="link" href="/#" >About us</a>
                    </Link>
                    <Link href="#">
                        <a className="link" href="/#" >Company</a>
                    </Link>
                </div>
                <div className="HeaderNavBlock">
                    <Link href="#">
                        <a className="link" href="/#">Support</a>
                    </Link>
                    <Link href="/login">
                        <a className="link" href="/#">Sign in </a>
                    </Link>
                </div>

                {/* <Link href="/users/">
                <a className="link" href="/#">About us</a>
            </Link> */}
            </ul>
        </nav>
    )
}

HeaderNav.propTypes = {}