import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../Assets/UI/CustomButton/CustomButton';
import module from "../Assets/UI/styles/gym.module.css"

const Gym = () => {
    const history = useNavigate()
    return (
        <div className={module.container}>
            <div className={module.textBox}>
                <div className={module.title}>Тренажерный зал</div>
                <div className={module.text}>
                    Просторный тренажёрный зал площадью более 312 м² оснащен профессиональным оборудованием от Matrix.
                    В вашем распоряжении тренажеры на все группы мышц, гантельный ряд от 1 до 50 кг, более 10 тонн свободных весов, надежные стойки для приседаний и скамьи для жима лежа.
                    <br /><br />
                    Зона кардиотренировок оборудована беговыми дорожками, эллипсоидными тренажерами, велотренажерами и гребным тренажерам.
                    <br /><br />
                    Здесь вы сможете заниматься, как самостоятельно, так и по индивидуально разработанной персональным тренером программе.
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
        </div >
    );
};

export default Gym;