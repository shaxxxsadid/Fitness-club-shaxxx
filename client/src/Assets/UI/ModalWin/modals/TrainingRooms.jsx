import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../../../..';
import { createTrainigRooms, deleteTrainigRooms, fetchAllTrainigRooms, updateTrainigRooms } from '../../../../http query/WorkoutApiQuery';
import CustomButton from '../../CustomButton/CustomButton';
import CustomInput from '../../CustomInput/CustomInput';
import TrainingRoomSelect from '../../Select/TrainingRoomSelect';
import MyModal from '../MyModal';

const TrainingRooms = observer((props) => {
    const [trainingRoom, setTrainingRoom] = useState(0)
    const [trainingRoomName, setTrainingRoomName] = useState("")
    const { groupWorkout } = useContext(Context)
    return (
        <MyModal visible={props.visibleTraining} setVisible={props.setVisibleTraining}>
            {
                props.delet ?
                    <CustomInput onChange={(event) => setTrainingRoom(Number(event.target.value))} type="number" placeholder='Введите Id зала'></CustomInput>
                    : props.add ?
                        <CustomInput onChange={(event) => setTrainingRoomName(event.target.value)} type="text" placeholder='Введите название' />
                        :
                        <div style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            flexDirection: "column"
                        }}>
                            <TrainingRoomSelect onChange={(event) => setTrainingRoom(Number(event.target.value))}></TrainingRoomSelect>
                            <CustomInput onChange={(event) => setTrainingRoomName(event.target.value)} type="text" placeholder='Введите название' />
                        </div>
            }
            <CustomButton data-width={3.5} data-widthAnim={3} onClick={() => {
                if (props.add && trainingRoomName) {
                    createTrainigRooms(trainingRoomName).then(data => {
                        props.setVisibleTraining(false)
                        alert('Зал успешно добавлен')
                        fetchAllTrainigRooms().then(data => groupWorkout.setTrainingRooms(data))
                    })
                } else {
                    if (props.add) { alert("Пустые поля") }
                    if (props.update && trainingRoomName && trainingRoom) {
                        updateTrainigRooms(trainingRoom, trainingRoomName).then(data => {
                            props.setVisibleTraining(false)
                            alert('Зал успешно изменен')
                            fetchAllTrainigRooms().then(data => groupWorkout.setTrainingRooms(data))
                        })
                    } else {
                        if (props.update) alert("Пустые поля")
                    }
                    if (props.delet && trainingRoom) {
                        deleteTrainigRooms(trainingRoom).then(data => {
                            props.setVisibleTraining(false)
                            alert('Зал успешно удален')
                            fetchAllTrainigRooms().then(data => groupWorkout.setTrainingRooms(data))
                        })
                    } else {
                        if (props.delet) alert("Пустые поля")
                    }
                }
            }}>
                {props.add ? "Добавить" : props.delet ? "Удалить" : "Изменить"}
            </CustomButton>
        </MyModal>
    );
});

export default TrainingRooms;