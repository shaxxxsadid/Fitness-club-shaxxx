import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../Assets/UI/CustomButton/CustomButton';
import module from "../Assets/UI/styles/gruopWorkout.module.css";

const GroupWorkout = () => {
    const history = useNavigate()
    return (
        <div className={module.container}>
            <div className={module.textBox}>
                <div className={module.title}>Групповые занятия</div>
                <div className={module.text}>
                    Два комфортных зала, более 100 групповых занятий в неделю для всех возрастов.
                    <br /><br />

                    Занимайтесь в компании единомышленников, пробуйте разные направления, вместе с зажигательным тренером
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

export default GroupWorkout;