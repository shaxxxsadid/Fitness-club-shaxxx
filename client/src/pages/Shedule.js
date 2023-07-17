import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import LoaderDash from '../Assets/UI/Loader/LoaderDash';
import module from "../Assets/UI/styles/shedule.module.css";
import CustomTable from '../Assets/UI/TableData/CustomTable';
import { fetchEmployee, fetchUser } from '../http query/UserApiQuery';
import { fetchAllTrainigRooms, fetchAllWorkouts, fetchAllWorkoutSchedules } from '../http query/WorkoutApiQuery';

const Shedule = observer(() => {
    const { groupWorkout } = useContext(Context)
    const { user } = useContext(Context)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetchAllWorkouts().then(data => groupWorkout.setGroupWorkouts(data))
        fetchAllTrainigRooms().then(data => groupWorkout.setTrainingRooms(data))
        fetchAllWorkoutSchedules().then(data => groupWorkout.setWorkoutSchedules(data)).finally(setIsLoading(false))
        fetchUser().then(data => user.setUsers(data))
        fetchEmployee().then(data => user.setEmployees(data))
    }, [])

    return (
        <div className={module.containerBox}>
            {isLoading
                ?
                <LoaderDash />
                :
                <div className={module.container}>
                    <CustomTable />
                </div>
            }


        </div>
    );
});

export default Shedule;