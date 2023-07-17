import React from 'react';
import img2 from '../Assets/Pictures/sales/sales2.jpg';
import img from '../Assets/Pictures/sales/sales1.jpg';
import img3 from '../Assets/Pictures/sales/sales.jpg';
import module from '../Assets/UI/styles/sales.module.css'

const Sales = () => {
    return (
        <div className={module.container}>
            <div className={module.gridItem}>
                <img src={img} />
                <div className={module.title}>Фитнес + бассейн всего за 46 руб. в день</div>
                <div className={module.text}>Выбор за тобой - успей забрать карту по акции </div>
            </div>
            <div className={module.gridItem}>
                <img src={img2} />
                <div className={module.title}>Фитнес + бассейн 0 руб. в первый месяц</div>
                <div className={module.text}>Растяни платеж - удобная рассрочка на 12 месяцев без переплаты</div>
            </div>
            <div className={module.gridItem}>
                <img src={img3} />
                <div className={module.title}>Персональные тренировки в теплом бассейне для детей с 5 лет</div>
                <div className={module.text}>Детские тренировки в бассейне с персональным тренером от 350 рублей</div>
            </div>
        </div>
    );
};

export default Sales;