import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../Assets/UI/CustomButton/CustomButton';
import module from "../Assets/UI/styles/spa.module.css";

const Spa = () => {
    const history = useNavigate()
    return (
        <div className={module.container}>
            <div className={module.textBox}>
                <div className={module.title}>Массаж и спа</div>
                <div className={module.text}>
                    Спа и массаж — отличное дополнение к занятиям фитнесом, позволяющее приумножить и сохранить эффект от тренировок.
                    <br /><br />
                    Совмещение процедур, предлагаемых нашим салоном, с регулярными фитнес-нагрузками, позволяет повысить работоспособность организма, ускорить обмен веществ, укрепить нервную систему
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

export default Spa;