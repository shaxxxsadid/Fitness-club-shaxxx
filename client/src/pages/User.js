import jwtDecode from 'jwt-decode';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import LoaderDash from '../Assets/UI/Loader/LoaderDash';
import module from '../Assets/UI/styles/admin.module.css';
import { fetchOneUser } from '../http query/UserApiQuery';

const User = observer((props) => {
    const { user } = useContext(Context)
    const token = localStorage.getItem("TokenJWT")
    const userInfo = jwtDecode(token)
    const birthday = String(user.user.Date_of_birth)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetchOneUser(userInfo.id).then(data => user.setUser(data)).finally(setIsLoading(false))
    }, [])
    return (
        <div {...props}>
            <div className={module.containerUser}>
                {isLoading
                    ?
                    <LoaderDash className={module.black}/>
                    :
                    <div>
                        <div className={module.UserTitle}>Добро пожаловать {props.login}</div>
                        <div className={module.UserText}>
                            <span
                                style={{
                                    textAlign: "right",
                                    width: '45%'
                                }}>
                                Имя:
                            </span>
                            <span style={{
                                width: "45%"
                            }}>
                                {user.user.Name}
                            </span>
                        </div>
                        <div className={module.UserText}><span
                            style={{
                                textAlign: "right",
                                width: '45%'
                            }}>
                            Фамилия:
                        </span>
                            <span style={{
                                width: "45%"
                            }}>
                                {user.user.LastName}
                            </span>
                        </div>
                        <div className={module.UserText}><span
                            style={{
                                textAlign: "right",
                                width: '45%'
                            }}>
                            Отчество:
                        </span>
                            <span style={{
                                width: "45%"
                            }}>
                                {user.user.Surname}
                            </span>
                        </div>
                        <div className={module.UserText}><span
                            style={{
                                textAlign: "right",
                                width: '45%'
                            }}>
                            Email:
                        </span>
                            <span style={{
                                width: "45%"
                            }}>
                                {user.user.Email}
                            </span>
                        </div>
                        <div className={module.UserText}><span
                            style={{
                                textAlign: "right",
                                width: '45%'
                            }}>
                            Телефон:
                        </span>
                            <span style={{
                                width: "45%"
                            }}>
                                {user.user.Phone}
                            </span>
                        </div>
                        <div className={module.UserText}><span
                            style={{
                                textAlign: "right",
                                width: '45%'
                            }}>
                            Номер карты:
                        </span>
                            <span style={{
                                width: "45%"
                            }}>
                                {user.user.ClubCard ? user.user.ClubCard : " Нет карты"}
                            </span>
                        </div>
                        <div className={module.UserText}><span
                            style={{
                                textAlign: "right",
                                width: '45%'
                            }}>

                            Дата Рождения:
                        </span>
                            <span style={{
                                width: "45%"
                            }}>
                                {birthday.slice(8, 10) + "." + birthday.slice(5, 7) + "." + birthday.slice(0, 4)}
                            </span>
                        </div>
                    </div>
                }


            </div>
        </div >
    );
});
export default User;