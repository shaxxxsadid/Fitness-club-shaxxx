import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../..';
import { fetchAllTrainigRooms, fetchAllWorkouts, fetchAllWorkoutSchedules } from '../../../http query/WorkoutApiQuery';
import module from "../styles/shedule.module.css";
import { FaMoneyBill } from 'react-icons/fa';
const Table = observer((props) => {
    const { groupWorkout } = useContext(Context)
    const { user } = useContext(Context)
    const checkName = (option) => {
        const name = groupWorkout.groupWorkouts.find(item => item.WorkoutId === option ? item : "")
        return name.CommercialClass && name?
            <div>{name.WorkoutName}<FaMoneyBill style={{marginLeft:"5px"}}></FaMoneyBill></div>
            : name.WorkoutName

    }
    const checkRoom = (option) => {
        const name = groupWorkout.trainingRooms.find(item => item.RoomId === option ? item : "")
        return name.RoomName
    }
    const checkInstructor = (option) => {
        const name = groupWorkout.groupWorkouts
            .filter(item => item.WorkoutId === option)
            .map(item => item.Instructor)
        const employee = user.employees
            .filter(item => item.EmployeesId === name[0])
            .map(item => item.EmployeeAccount)
        const instructor = user.users.find(option => option.UserId === employee[0])
        return instructor ? instructor.Name + " " + instructor.LastName : ""
    }
    return (
        <td className={module.dataContainer}>
            {
                groupWorkout.workoutSchedules.map(option =>
                    option.Day === props.day && option.Time === props.time ?
                        <div key={option.WorkoutId} className={module.dataContent}>
                            <div> {checkName(option.Workout)}</div>
                            <div className={module.dataContentTitle}>{option.Time}</div>
                            <div className={module.dataContentItem}>{checkRoom(option.TrainingRoom)}</div>
                            <div className={module.dataContentItem}>{checkInstructor(option.Workout)}</div>
                        </div>
                        : ""
                )
            }
        </td>
    );
});

export default Table;