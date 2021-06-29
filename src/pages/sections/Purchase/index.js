import React from 'react';
import PurcharImg from '../../../images/purchase.svg';
import { Button } from '../../../components/Button/index';
import './style.css';

export const Purchase = () => {
    return (
        <section className="Purchase">
            <div className="PurchaseContent">
                <div className="ContentLeft">
                    <h2 className="PurchaseTitle">Purchase Anytime</h2>
                    <h4 className="PurchasesDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime necessitatibus maiores laudantium quibusdam rerum dolore inventore laborum.</h4>
                    <div>
                        <Button text="Let's try out!" color="purple" />
                    </div>
                </div>
                <div className="ContentRight">
                    <img alt="Purchase Img" src={PurcharImg} />
                </div>

            </div>
        </section>
    )
}
