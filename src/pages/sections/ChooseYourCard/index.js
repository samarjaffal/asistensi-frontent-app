import React from 'react';
import { Card } from '../../../components/Card/index';
import './style.css';

export const ChooseYourCard = () => {
    return (
        <section className="ChooseYourCard">
            <div className="ChooseYourCardContent">
                <h2 className="ChooseYourCardTitle">Choose Your Card</h2>
                <h4 className="ChooseYourCardDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime necessitatibus maiores laudantium quibusdam rerum dolore inventore laborum, quasi ipsam!</h4>
            </div>

            <div className="ListOfCreditCards">
                <ul>
                    <li><Card color="purple" /></li>
                    <li><Card color="pink" /></li>
                    <li><Card color="blue" /></li>
                </ul>
            </div>

        </section>
    )
}