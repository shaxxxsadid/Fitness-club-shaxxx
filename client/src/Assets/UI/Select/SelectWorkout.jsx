import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '../../..';
import { fetchAllWorkouts } from '../../../http query/WorkoutApiQuery';
import module from '../../UI/styles/admin.module.css';

const SelectWorkout = observer((props) => {
    const { groupWorkout } = useContext(Context)
    useEffect(()=>{
        fetchAllWorkouts().then(data => groupWorkout.setGroupWorkouts(data))
    },[])
    return (
        <select
            className={module.select}
            {...props}
        >
            <option disabled value="value1">Укажите тренировку </option>
            {groupWorkout.groupWorkouts.map(option =>
                <option key={option.WorkoutId} value={option.WorkoutId}>
                    {option.WorkoutName}
                </option>
            )}
        </select>
    );
});

export default SelectWorkout;