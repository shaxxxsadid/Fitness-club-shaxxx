import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../../../..';
import { createGroupWorkout, deleteGroupWorkout } from '../../../../http query/UserApiQuery';
import { fetchAllWorkouts, updateWorkouts } from '../../../../http query/WorkoutApiQuery';
import CustomButton from '../../CustomButton/CustomButton';
import CustomInput from '../../CustomInput/CustomInput';
import SelectEmployee from '../../Select/SelectEmployee';
import SelectWorkout from '../../Select/SelectWorkout';
import MyModal from '../MyModal';

const WorkoutModal = observer((props) => {
    const [Description, setDescription] = useState("")
    const [workoutName, setWorkoutName] = useState("")
    const [workout, setWorkout] = useState(1)
    const [employee, setEmployee] = useState(1)
    const [bool, setBool] = useState(false)
    const [delId, SetDelId] = useState(0)
    const delet = props.delet
    const add = props.add
    const update = props.update
    const { groupWorkout } = useContext(Context)
    return (
        <MyModal visible={props.visibleGroup} setVisible={props.setVisibleGroup}>
            {delet
                ?
                <CustomInput onChange={(event) => SetDelId(Number(event.target.value))} type="number" placeholder='Введите Id услуги' />
                : add ?
                    <div style={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        flexDirection: "column"
                    }}>
                        <CustomInput onChange={(event) => setWorkoutName(event.target.value)} type="text" placeholder='Введите название тренировки' />
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            marginBottom: '25px',
                            fontSize: '22px',
                            padding: "10px 10px",
                            background: "rgba(217, 217, 217, 0.8)",
                            boxShadow: 'inset 2px 4px 4px rgba(0, 0, 0, 0.10)'
                        }}>
                            <label htmlFor="check">Комерческий класс</label>
                            <CustomInput
                                onChange={(event) => setBool(Boolean(event.target.checked))}
                                style={{
                                    margin: '0px 0px 0px 10px',
                                    padding: '0px',
                                    width: '30px'
                                }} id="check" type="checkBox" placeholder='Введите стоимость услуги' />
                        </div>
                        <SelectEmployee onChange={(event) => setEmployee(Number(event.target.value))} />
                        <CustomInput onChange={(event) => setDescription(event.target.value)} type="text" placeholder='Введите описание тренировки' />
                    </div>
                    :
                    <div style={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        flexDirection: "column"
                    }}>
                        <SelectWorkout onChange={(event) => setWorkout(Number(event.target.value))} />
                        <CustomInput onChange={(event) => setWorkoutName(event.target.value)} type="text" placeholder='Введите название тренировки' />
                        <div style={{
                            display: 'flex',
                            width: '400px',
                            alignItems: 'center',
                            marginBottom: '25px',
                            fontSize: '22px',
                            padding: "10px 10px",
                            background: "rgba(217, 217, 217, 0.8)",
                            boxShadow: 'inset 2px 4px 4px rgba(0, 0, 0, 0.10)'
                        }}>
                            <label htmlFor="check">Комерческий класс</label>
                            <CustomInput
                                onChange={(event) => setBool(Boolean(event.target.checked))}
                                style={{
                                    margin: '0px 0px 0px 10px',
                                    padding: '0px',
                                    width: '30px'
                                }} id="check" type="checkBox" placeholder='Введите стоимость услуги' />
                        </div>
                        <SelectEmployee onChange={(event) => setEmployee(Number(event.target.value))} />
                        <CustomInput onChange={(event) => setDescription(event.target.value)} type="text" placeholder='Введите описание тренировки' />
                    </div>
            }
            <CustomButton data-width={3.5} data-widthAnim={3} onClick={() => {
                if (add && Description && employee && workoutName) {
                    createGroupWorkout(workoutName, bool, employee, Description).then(data => {
                        props.setVisibleGroup(false)
                        fetchAllWorkouts().then(data => groupWorkout.setGroupWorkouts(data))
                    })
                } else {
                    if (update && workout && Description && employee && workoutName) {
                        updateWorkouts(workout, workoutName, bool, employee, Description).then(data => {
                            props.setVisibleGroup(false)
                            alert(data)
                            fetchAllWorkouts().then(data => groupWorkout.setGroupWorkouts(data))
                        })
                    } else {
                        alert("Пустые поля")
                    }
                    if (add) alert("Пустые поля")
                }
                if (delet && delId) {
                    if (delet) {
                        deleteGroupWorkout(delId).then(data => {
                            props.setVisibleGroup(false)
                            alert(data)
                            fetchAllWorkouts().then(data => groupWorkout.setGroupWorkouts(data))
                        })
                    }
                } else {
                    if (delet) alert("Пустые поля")
                }
            }}>
                {add ?
                    'Добавить'
                    :
                    delet ? 'Удалить' : 'Изменить'
                }
            </CustomButton>
        </MyModal>
    );
});

export default WorkoutModal;