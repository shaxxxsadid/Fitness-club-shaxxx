import React, { useContext, useEffect } from 'react';
import { FaClock } from 'react-icons/fa';
import TableRow from './TableRow';
import module from "../styles/shedule.module.css";
import { observer } from 'mobx-react-lite';
import { fetchAllTrainigRooms, fetchAllWorkouts, fetchAllWorkoutSchedules } from '../../../http query/WorkoutApiQuery';
import { Context } from '../../..';

const CustomTable = () => {
    const nameDay = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
    return (
        <table className={module.table}>
            <th><FaClock /></th>
            {nameDay.map(day => <th key={day}>{day}</th>)}
            <TableRow time={"07:00"}></TableRow>
            <TableRow time={"08:00"}></TableRow>
            <TableRow time={"09:00"}></TableRow>
            <TableRow time={"10:00"}></TableRow>
            <TableRow time={"11:00"}></TableRow>
            <TableRow time={"12:00"}></TableRow>
            <TableRow time={"13:00"}></TableRow>
            <TableRow time={"14:00"}></TableRow>
            <TableRow time={"15:00"}></TableRow>
            <TableRow time={"16:00"}></TableRow>
            <TableRow time={"17:00"}></TableRow>
            <TableRow time={"18:00"}></TableRow>
            <TableRow time={"19:00"}></TableRow>
            <TableRow time={"20:00"}></TableRow>
            <TableRow time={"21:00"}></TableRow>
        </table>
    );
};

export default CustomTable;