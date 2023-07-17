import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../Assets/UI/CustomButton/CustomButton';
import module from "../Assets/UI/styles/aqua.module.css"

const Aqua = () => {
    const history = useNavigate()
    return (
        <div className={module.container}>
            <div className={module.textBox}>
                <div className={module.title}>Аквазона</div>
                <div className={module.text}>
                    20-метровый бассейн с акварелакс зоной (с противотоком и гидромассажем), оснащенный современной многоступенчатой системой очистки воды.
                    <br /><br />
                    <ul>
                        <li>3 плавательных дорожки</li>
                        <li>Групповые занятия по аквааэробике</li>
                        <li>Школа плавания для детей и взрослых</li>
                        <li>Самостоятельное плавание родителей с детьми от 4 до 12 лет</li>
                    </ul>
                </div>
            </div>
            <div className={module.textBox}>
                <div className={module.btnLink}>
                    <CustomButton onClick={() => history("/cards")} data-width={3.5} data-widthAnim={3} data-color={2}>Клубные карты</CustomButton>
                </div>
                <div className={module.btnLink}>
                    <CustomButton onClick={() => history("/shedule")} data-width={3.5} data-widthAnim={3} data-color={2}>Расписание</CustomButton>
                </div>
            </div>
        </div>
    );
};

export default Aqua;