import React, { useContext, useState } from 'react';
import module from '../Assets/UI/styles/auth.module.css';
import CustomButton from '../Assets/UI/CustomButton/CustomButton';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { INTRO_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/configRoutes';
import { login, registration } from '../http query/UserApiQuery';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Cookies } from 'react-cookie';
const Auths = observer(() => {
    const cookie = new Cookies();
    const { user } = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === REGISTRATION_ROUTE
    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [surName, setSurName] = useState()
    const [logIn, setLogin] = useState()
    const [passowrd, setPassword] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [dateOfBrirth, setDateOfBirth] = useState()
    const history = useNavigate()
    const signIn = async () => {
        try {
            let response
            if (!isLogin) {
                response = await login(logIn, passowrd)
                history(INTRO_ROUTE)

            } else {
                response = await registration(logIn, passowrd, name, lastName, surName, phone, email, dateOfBrirth, 1)
                history(LOGIN_ROUTE)
            }
            cookie.remove('JWTs')
            cookie.set('JWTs', response, { path: '/'});
            localStorage.setItem("TokenJWT", response)
            user.setToken(response)
            user.setUserToken(response)
            user.setIsAuth(true)
        } catch (e) {
            alert((e.response.data.message) ? e.response.data.message : "")
        }

    }
    return (
        <div className={module.auths}>
            <div className={module.container}>
                <div className={module.registration}>
                    <div className={module.dec}>
                        {isLogin ?
                            <div className={module.registrationBox}>
                                <div className={module.title}>Регистрация</div>
                                <input type="text" placeholder='Введите Имя...' value={name} onChange={e => { setName(e.target.value) }} />
                                <input type="text" placeholder='Введите Фамилию...' value={lastName} onChange={e => { setLastName(e.target.value) }} />
                                <input type="text" placeholder='Введите Отчество...' value={surName} onChange={e => { setSurName(e.target.value) }} />
                                <input type="text" placeholder='Введите Логин...' value={logIn} onChange={e => { setLogin(e.target.value) }} />
                                <input type="password" placeholder='Введите Пароль...' value={passowrd} onChange={e => { setPassword(e.target.value) }} />
                                <input type="tel" placeholder='Введите Телефон...' value={phone} onChange={e => { setPhone(e.target.value) }} />
                                <input type="email" placeholder='Введите email...' value={email} onChange={e => { setEmail(e.target.value) }} />
                                <input type="date" placeholder='Введите дату рождения...' value={dateOfBrirth} onChange={e => { setDateOfBirth(e.target.value) }} />
                                <div className={module.title} style={{
                                    fontSize: "20px",
                                    paddingBottom: "20px"
                                }}>
                                    Уже есть аккаунт?
                                    <Link to={LOGIN_ROUTE} style={{
                                        marginLeft: "10px"
                                    }}>Авторизироваться</Link>
                                </div>
                                <Link className={module.registrationBtn}>
                                    <CustomButton onClick={signIn} data-color='1' data-width='3' data-widthAnim='3' >
                                        Зарегистрироваться
                                    </CustomButton>
                                </Link>
                            </div>
                            :
                            <div className={module.registrationBox}>
                                <div className={module.title}>Авторизация</div>
                                <input type="text" placeholder='Введите логин...' value={logIn} onChange={e => { setLogin(e.target.value) }} />
                                <input type="password" placeholder='Введите пароль...' value={passowrd} onChange={e => { setPassword(e.target.value) }} />
                                <div className={module.title} style={{
                                    fontSize: "20px",
                                    paddingBottom: "20px"
                                }}>
                                    Нет аккаунта?
                                    <Link to={REGISTRATION_ROUTE} style={{
                                        marginLeft: "10px"
                                    }}>Зарегистрироваться</Link>
                                </div>
                                <Link className={module.registrationBtn}>
                                    <CustomButton onClick={signIn} data-color='1' data-width='2' data-widthAnim='2' >
                                        Войти
                                    </CustomButton>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Auths;