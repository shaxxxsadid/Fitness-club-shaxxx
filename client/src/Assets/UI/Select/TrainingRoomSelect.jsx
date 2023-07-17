import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '../../..';
import { fetchAllTrainigRooms } from '../../../http query/WorkoutApiQuery';
import module from '../../UI/styles/admin.module.css';

const TrainingRoomSelect = observer((props) => {
    const { groupWorkout } = useContext(Context)
    useEffect(() => {
        fetchAllTrainigRooms().then(data => groupWorkout.setTrainingRooms(data))
    }, [])
    return (
        <select
            className={module.select}
            {...props}
        >
            <option disabled value="value1">Укажите зал</option>
            {groupWorkout.trainingRooms.map(option =>
                <option key={option.RoomId} value={option.RoomId}>
                    {option.RoomName}
                </option>
            )}
        </select>
    );
});

export default TrainingRoomSelect;