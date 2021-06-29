import React from 'react';
import { CardInfo } from '../../../components/CardInfo/index';
import CardSvg from '../../../images/card-svg.svg';
import Card2Svg from '../../../images/credit-card-2.svg';
import Card3Svg from '../../../images/credir-card-3.svg'
import './style.css';


export const GetYourCard = () => {

    const cards = [
        {
            title: 'Lorem ipsum dolor 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odio iste repudiandae eos dicta. Provident?',
            svgIcon: CardSvg,
            active: false,
            color: 'light-purple'
        },
        {
            title: 'Lorem ipsum dolor 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odio iste repudiandae eos dicta. Provident?',
            svgIcon: Card2Svg,
            active: true,
            color: 'purple'
        },
        {
            title: 'Lorem ipsum dolor 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odio iste repudiandae eos dicta. Provident?',
            svgIcon: Card3Svg,
            active: false,
            color: 'light-purple'
        },

    ]

    return (
        <section className="GetYourCard">
            <div className="GetYourCardContent">
                <h2 className="GetYourCardTitle">Ger your card</h2>
                <h4 className="GetYourCardDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime necessitatibus maiores laudantium quibusdam rerum dolore inventore laborum, quasi ipsam!</h4>

            </div>
            <div className="ListCardInfo">
                <ul>
                    {cards.map((card, index) => <CardInfo key={index} {...card} />)}
                </ul>
            </div>
        </section>
    )
}