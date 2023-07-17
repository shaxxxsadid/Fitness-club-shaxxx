import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../../../..';
import { createWorkoutSchedules, deleteWorkoutSchedules, fetchAllWorkoutSchedules, updateWorkoutSchedules } from '../../../../http query/WorkoutApiQuery';
import CustomButton from '../../CustomButton/CustomButton';
import CustomInput from '../../CustomInput/CustomInput';
import DaySelect from '../../Select/DaySelect';
import SelectTime from '../../Select/SelectTime';
import SelectWorkout from '../../Select/SelectWorkout';
import TrainingRoomSelect from '../../Select/TrainingRoomSelect';
import MyModal from '../MyModal';

const Schedule = observer((props) => {
    const [room, setRoom] = useState(1)
    const [time, setTime] = useState("07:00")
    const [workout, setWorkout] = useState(1)
    const [day, setDay] = useState(1)
    const [shedule, setShedule] = useState(1)
    const { groupWorkout } = useContext(Context)
    return (
        <MyModal visible={props.visibleShedule} setVisible={props.setVisibleSchedule}>
            {
                props.delet ?
                    <CustomInput onChange={(event) => setShedule(Number(event.target.value))} type="number" placeholder='Введите Id бредна'></CustomInput>
                    : props.add ?
                        <div style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            flexDirection: "column"
                        }}>
                            <DaySelect onChange={(event) => setDay(Number(event.target.value))} />
                            <SelectWorkout onChange={(event) => setWorkout(Number(event.target.value))} />
                            <SelectTime onChange={(event) => setTime(event.target.value)} />
                            <TrainingRoomSelect onChange={(event) => setRoom(Number(event.target.value))} />
                        </div>
                        :
                        <div style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            flexDirection: "column"
                        }}>
                        </div>
            }
            <CustomButton data-width={3.5} data-widthAnim={3} onClick={() => {
                if (props.add && room && time && workout && day) {
                    createWorkoutSchedules(day,workout,time,room).then(data => {
                        props.setVisibleSchedule(false)
                        alert('В расписание успешно добавлено')
                        fetchAllWorkoutSchedules().then(data => groupWorkout.setWorkoutSchedules(data))
                    })
                } else {
                    if (props.add) { alert("Пустые поля") }
                    if (props.delet && shedule) {
                        deleteWorkoutSchedules(shedule).then(data => {
                            props.setVisibleSchedule(false)
                            alert('Из расписания успешно удалено')
                            fetchAllWorkoutSchedules().then(data => groupWorkout.setWorkoutSchedules(data))
                        })
                    } else {
                        if (props.delet) alert("Пустые поля")
                    }
                }
            }}>
                {props.add ? "Добавить" : "Удалить"}
            </CustomButton>
        </MyModal>
    );
});

export default Schedule;