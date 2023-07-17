import React from 'react';
import module from '../../UI/styles/admin.module.css';

const DaySelect = (props) => {
    const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
    return (
        <select
            className={module.select}
            {...props}
        >
            <option disabled value="value1">День тренировки</option>
            {week.map((option, index) =>
                <option key={index+1} value={index+1}>
                    {option}
                </option>
            )}
        </select>
    );
};

export default DaySelect;