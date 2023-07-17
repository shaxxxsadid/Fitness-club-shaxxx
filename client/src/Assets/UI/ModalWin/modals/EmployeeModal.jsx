import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../../../..';
import { createEmployee, deleteEmployees, fetchEmployee, updateEmployee } from '../../../../http query/UserApiQuery';
import CustomButton from '../../CustomButton/CustomButton';
import CustomInput from '../../CustomInput/CustomInput';
import PositionSelect from '../../Select/PositionSelect';
import SelectEmployee from '../../Select/SelectEmployee';
import UserSelect from '../../Select/UserSelect';
import MyModal from '../MyModal';

const EmployeeModal = observer((props) => {
    const [specialization, setSpecialization] = useState("")
    const [education, setEducation] = useState("")
    const [place, setPlace] = useState("")
    const [users, setUsers] = useState(1)
    const [employee, setEmployee] = useState(1)
    const [position, setPosition] = useState(1)
    const [delId, SetDelId] = useState(0)
    const delet = props.delet
    const add = props.add
    const update = props.update
    const { user } = useContext(Context)
    return (
        <MyModal visible={props.visibleEmployee} setVisible={props.setVisibleEmployee}>
            {delet
                ?
                <CustomInput onChange={(event) => SetDelId(Number(event.target.value))} type="number" placeholder='Введите Id сотрудника' />
                : add ?
                    <div style={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        flexDirection: "column"
                    }}>
                        <CustomInput onChange={(event) => setEducation(event.target.value)} type="text" placeholder='Введите образование' />
                        <CustomInput onChange={(event) => setSpecialization(event.target.value)} type="text" placeholder='Введите специализацию' />
                        <CustomInput onChange={(event) => setPlace(event.target.value)} type="text" placeholder='Введите место проживания' />
                        <PositionSelect onChange={(event) => setPosition(Number(event.target.value))} />
                        <UserSelect onChange={(event) => setUsers(Number(event.target.value))} />
                    </div>
                    :
                    <div style={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        flexDirection: "column"
                    }}>
                        <SelectEmployee onChange={(event) => setEmployee(Number(event.target.value))} />
                        <CustomInput onChange={(event) => setEducation(event.target.value)} type="text" placeholder='Введите образование' />
                        <CustomInput onChange={(event) => setSpecialization(event.target.value)} type="text" placeholder='Введите специализацию' />
                        <CustomInput onChange={(event) => setPlace(event.target.value)} type="text" placeholder='Введите место проживания' />
                        <PositionSelect onChange={(event) => setPosition(Number(event.target.value))} />
                        <UserSelect onChange={(event) => setUsers(Number(event.target.value))} />
                    </div>
            }
            <CustomButton data-width={3.5} data-widthAnim={3} onClick={() => {
                if (add && position && users && place && education && specialization) {
                    createEmployee(position, education, specialization, users, place).then(data => {
                        props.setVisibleEmployee(false)
                        alert("Сотрудник успешно добавлен")
                        fetchEmployee().then(data => user.setEmployees(data))
                    })
                } else {
                    if (add) alert("Пустые поля")
                    if (update && position && users && place && education && specialization && employee) {
                        updateEmployee(employee, position, education, specialization, users, place).then(data => {
                            props.setVisibleEmployee(false)
                            alert(data)
                            alert("Сотрудник успешно изменен")
                            fetchEmployee().then(data => user.setEmployees(data))
                        })
                    }
                }
                if (delet && delId) {
                    if (delet) {
                        deleteEmployees(delId).then(data => {
                            props.setVisibleEmployee(false)
                            alert(data)
                            alert("Сотрудник успешно удален")
                            fetchEmployee().then(data => user.setEmployees(data))
                        })
                    }
                } else {
                    if (delet) alert("Пустые поля")
                }
            }} >
                {add ?
                    'Добавить'
                    :
                    delet ? 'Удалить' : 'Изменить'
                }
            </CustomButton>
        </MyModal>
    );
});

export default EmployeeModal;