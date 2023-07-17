import React from 'react';
import module from '../../UI/styles/admin.module.css';

const SelectTime = (props) => {
    const week = ['07:00','08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00','15:00', '16:00', '17:00', '18:00','19:00', '20:00', '21:00']
    return (
        <select
            className={module.select}
            {...props}
        >
            <option disabled value="value1">Время тренировки</option>
            {week.map(option =>
                <option key={option} value={option}>
                    {option}
                </option>
            )}
        </select>
    );
};

export default SelectTime;