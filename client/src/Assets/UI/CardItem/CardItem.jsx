import React from 'react';
import module from '../styles/cards.module.css';

const CardItem = (props) => {
    return (
        <div className={module.Item}>
            <div className={module.ItemTitle}>{props.title}</div>
            <div className={module.ItemTariff}>{props.tariff}</div>
            <div>{props.children}</div>
        </div>
    );
};

export default CardItem;