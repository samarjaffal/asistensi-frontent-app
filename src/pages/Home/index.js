import React from 'react';
import { Header } from '../../components/Header/index';
import { GetYourCard } from '../sections/GetYourCard/index';
import { Purchase } from '../sections/Purchase/index';
import { ChooseYourCard } from '../sections/ChooseYourCard/index';
import { Footer } from '../../components/Footer/index';

export const Home = () => {

    return (
        <>
            <Header />
            <GetYourCard />
            <Purchase />
            <ChooseYourCard />
            <Footer />
        </>
    )
}