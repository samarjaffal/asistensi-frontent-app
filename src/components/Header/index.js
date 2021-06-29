import React, { useEffect, useState } from 'react';
import { HeaderNav } from '../HeaderNav/index';
import { Card } from '../Card/index';
import { Button } from '../Button/index';
import { HeaderNavMobile } from '../HeaderNavMobile/index'
import { useScreenSize } from '../../hooks/useScreenSize';
import './style.css';

export const Header = () => {
    const [isOpenMobileNav, setOpenMobileNav] = useState(false);
    const { isMobile } = useScreenSize();

    const toggleNav = () => {
        setOpenMobileNav(!isOpenMobileNav);
    }

    useEffect(() => {
        if (!isMobile && isOpenMobileNav) toggleNav()
    }, [isMobile])


    return (
        <header className="Header">
            {
                !isMobile ? <HeaderNav isMobile={isMobile} isOpenMobileNav={isOpenMobileNav} toggleNav={toggleNav} /> : <HeaderNavMobile isMobile={isMobile} isOpenMobileNav={isOpenMobileNav} toggleNav={toggleNav} />
            }


            <div className="HeaderContent">
                <div className="TitleContainer">
                    <h1>Be smart take card</h1>
                </div>
                <h4 className="HeaderDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, laudantium iusto, iure maiores culpa asperiores porro deleniti officia tenetur perspiciatis sit amet rem corporis beatae illum odit nobis iure tempore laborum.
                </h4>


                <div className="HeaderButton">
                    <Button text="Apply for card" color="white" />
                </div>

                <Card />
            </div>
        </header>
    )
}
