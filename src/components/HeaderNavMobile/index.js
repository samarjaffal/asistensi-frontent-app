import React from 'react';
import { HeaderNav } from '../HeaderNav/index';
import './style.css';

export const HeaderNavMobile = ({ isMobile, toggleNav, isOpenMobileNav }) => {
    return (
        <>
            <div className="HeaderNavMobile">
                <div className="HamburguerIcon">
                    <button onClick={toggleNav}>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2" /><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" /></svg>
                    </button>
                </div>
            </div>

            <HeaderNav isMobile={isMobile} isOpenMobileNav={isOpenMobileNav} toggleNav={toggleNav} />
        </>
    )
}
