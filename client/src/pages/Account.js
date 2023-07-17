import React, { useContext, useEffect } from 'react';
import { Context } from '..';
import Admin from './Admin';
import User from './User';
import module from '../Assets/UI/styles/admin.module.css'
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import { observer } from 'mobx-react-lite';
import { fetchAllCards, fetchEmployee, fetchOneUser, fetchPosition, fetchUser } from '../http query/UserApiQuery';
import { fetchBrand, fetchSuppliers } from '../http query/ProductApiQuery';
import { fetchAllServices } from '../http query/ServicesApiQouery';
import { fetchAllTrainigRooms, fetchAllWorkouts } from '../http query/WorkoutApiQuery';
const Account = observer(() => {
    const { user } = useContext(Context)
    const { product } = useContext(Context)
    const { service } = useContext(Context)
    const { groupWorkout } = useContext(Context)
    const [check, setCheck] = useState("false");
    const [login, setLogin] = useState(null);
    const [role, setRole] = useState(null);
    const handleToggle = (bool) => {
        setCheck(bool)
    }
    const token = localStorage.getItem("TokenJWT")
    const userInfo = jwtDecode(token)
    useEffect(() => {
        setLogin(userInfo.login)
        setRole(userInfo.role)
        fetchPosition().then(data => user.setPositions(data))
        fetchBrand().then(data => product.setBrands(data))
        fetchSuppliers().then(data => product.setSuppliers(data))
        fetchUser().then(data => user.setUsers(data))
        fetchEmployee().then(data => user.setEmployees(data))
        fetchAllServices().then(data => service.setServices(data))
        fetchAllWorkouts().then(data => groupWorkout.setGroupWorkouts(data))
        fetchAllTrainigRooms().then(data => groupWorkout.setTrainingRooms(data))
        fetchAllCards().then(data => user.setClubCard(data))
    }, [])
    return (
        <div>
            {role === 3
                ?
                <div className={module.container}>
                    <div className={module.tabBox}>
                        <div className={check ? module.tab + ' ' + module.active : module.tab} onClick={() => handleToggle(true)} >Окно Пользователя</div>
                        <div className={!check ? module.tab + ' ' + module.active : module.tab} onClick={() => handleToggle(false)} >Окно Админ Панели</div>
                    </div>
                    <div className={module.box}>
                        <User login={login} className={check ? module.visible + ' ' + module.boxitem : module.hidden + ' ' + module.boxitem} />
                        <Admin className={!check ? module.visible + ' ' + module.boxitem : module.hidden + ' ' + module.boxitem} />
                    </div>
                </div>
                :
                <div className={module.container}>
                    <div className={module.tabBox} >
                        <div className={module.tab + " " + module.single} >Окно Пользователя</div>
                    </div>
                    <div className={module.box}>
                        <User className={module.boxitem} login={login} id={userInfo.id} />
                    </div>
                </div>
            }
        </div>
    );
});

export default Account;