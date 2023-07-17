import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../../../..';
import { createUser, deleteUser, fetchUser, updateUser } from '../../../../http query/UserApiQuery';
import CustomButton from '../../CustomButton/CustomButton';
import CustomInput from '../../CustomInput/CustomInput';
import ClubCard from '../../Select/ClubCard';
import PositionSelect from '../../Select/PositionSelect';
import UserSelect from '../../Select/UserSelect';
import MyModal from '../MyModal';
import module from '../MyModal.module.css';

const UserModal = observer((props) => {
    const [users, setUser] = useState(1)
    const [userName, setUserName] = useState("")
    const [userLastName, setUserLastName] = useState("")
    const [userSurName, setUserSurName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setUserEmail] = useState("")
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [date, setDate] = useState("")
    const [clubCard, setClubCard] = useState(null)
    const [position, setPosition] = useState(1)
    const [delId, SetDelId] = useState(0)
    const delet = props.delet
    const add = props.add
    const update = props.update
    const { user } = useContext(Context)
    return (
        <MyModal visible={props.visibleUser} setVisible={props.setVisibleUser}>
            {delet
                ?
                <CustomInput onChange={(event) => SetDelId(Number(event.target.value))} type="number" placeholder='Введите Id пользователя' />
                : add ?
                    <div style={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        flexDirection: "column"
                    }}>
                        <CustomInput onChange={(event) => setUserName(event.target.value)} type="text" placeholder='Введите имя' />
                        <CustomInput onChange={(event) => setUserLastName(event.target.value)} type="text" placeholder='Введите фамилию' />
                        <CustomInput onChange={(event) => setUserSurName(event.target.value)} type="text" placeholder='Введите отчество' />
                        <CustomInput onChange={(event) => setPhone(event.target.value)} type="tel" placeholder='Введите телефон' />
                        <CustomInput onChange={(event) => setUserEmail(event.target.value)} type="email" placeholder='Введите email' />
                        <CustomInput onChange={(event) => setLogin(event.target.value)} type="text" placeholder='Введите логин' />
                        <CustomInput onChange={(event) => setPassword(event.target.value)} type="password" placeholder='Введите проль' />
                        <PositionSelect onChange={(event) => setPosition(Number(event.target.value))} />
                        <ClubCard onChange={(event) => setClubCard(Number(event.target.value))} />
                        <CustomInput onChange={(event) => setDate(event.target.value)} type="date" />
                    </div>
                    :
                    <div style={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        flexDirection: "column"
                    }}>
                        <UserSelect onChange={(event) => setUser(Number(event.target.value))} />
                        <CustomInput onChange={(event) => setUserName(event.target.value)} type="text" placeholder='Введите имя' />
                        <CustomInput onChange={(event) => setUserLastName(event.target.value)} type="text" placeholder='Введите фамилию' />
                        <CustomInput onChange={(event) => setUserSurName(event.target.value)} type="text" placeholder='Введите отчество' />
                        <CustomInput onChange={(event) => setPhone(event.target.value)} type="tel" placeholder='Введите телефон' />
                        <CustomInput onChange={(event) => setUserEmail(event.target.value)} type="email" placeholder='Введите email' />
                        <CustomInput onChange={(event) => setLogin(event.target.value)} type="text" placeholder='Введите логин' />
                        <CustomInput onChange={(event) => setPassword(event.target.value)} type="password" placeholder='Введите проль' />
                        <ClubCard onChange={(event) => setClubCard(Number(event.target.value))} />
                        <CustomInput onChange={(event) => setDate(event.target.value)} type="date" />
                    </div>
            }
            <CustomButton data-width={3.5} data-widthAnim={3} onClick={() => {
                if (add && login && password && userName && userLastName && userSurName && phone && email && date && position) {
                    const level_access = position === 1 ? 3 : 2
                    createUser(login, password, userName, userLastName, userSurName, phone, email, date, level_access, clubCard).then(date => {
                        props.setVisibleUser(false)
                        fetchUser().then(data => user.setUsers(data))
                    })

                } else {
                    if (add) alert("Пустые поля")
                    if (update && users && login && password && userName && userLastName && userSurName && phone && email && date) {
                        updateUser(users, login, password, userName, userLastName, userSurName, phone, email, date, clubCard).then(data => {
                            props.setVisibleUser(false)
                            alert(data)
                            fetchUser().then(data => user.setUsers(data))
                        })
                    } else {
                        if (update) alert("Пустые поля")
                    }
                }
                if (delet && delId) {
                    if (delet) {
                        deleteUser(delId).then(data => {
                            props.setVisibleUser(false)
                            alert(data)
                            fetchUser().then(data => user.setUsers(data))
                        })
                    }
                } else {
                    if (delet) alert("Пустые поля")
                }
            }
            }>
                {add ?
                    'Добавить'
                    :
                    delet ? 'Удалить' : 'Изменить'
                }
            </CustomButton>
        </MyModal>
    );
});

export default UserModal;