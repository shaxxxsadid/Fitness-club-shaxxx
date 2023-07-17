import React, { useContext, useState } from 'react';
import imageLogo from '../../Pictures/Navbar/LOGO.svg';
import imageDrop from '../../Pictures/Navbar/drop.svg';
import imageDrop1 from '../../Pictures/Navbar/gym.svg';
import imageDrop2 from '../../Pictures/Navbar/aquazone.svg';
import imageDrop3 from '../../Pictures/Navbar/group.svg';
import imageDrop4 from '../../Pictures/Navbar/spa.svg';
import shop from '../../Pictures/Navbar/shop.svg';
import module from '../navBar/NavBar.module.css';
import { Link } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';
import { Context } from '../../..';
import { observer } from "mobx-react-lite";
import { ACCOUNT_ROUTE, AQUA_ROUTE, GYM_ROUTE, INTRO_ROUTE, LOGIN_ROUTE } from '../../../utils/configRoutes';
const NavBar = observer(() => {
    const { user } = useContext(Context)
    const [mobile, setMobile] = useState(false)
    const logout = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.setItem("token", "")
    }
    return (
        <div className={module.background}>
            {user.isAuth ?
                <div className={module.navBarContainer}>
                    <Link to={INTRO_ROUTE} onClick={() => mobile ? setMobile(!mobile) : ""}>
                        <img className={module.white + ' ' + module.logo} src={imageLogo} />
                    </Link>
                    <div className={mobile ? module.mobileMenu + " " + module.mobActive : module.mobileMenu} onClick={() => setMobile(!mobile)}>
                        <hr />
                    </div>
                    <div className={module.navLinks}>
                        <Link className={module.link}>
                            <span>Услуги</span>
                        </Link>
                        <div className={module.info}>
                            <ul>
                                <li>
                                    <Link to={GYM_ROUTE} className={module.link + " " + module.item} onClick={() => mobile ? setMobile(!mobile) : ""}>
                                        <img width={40} height={40} src={imageDrop1} />
                                        Тренажерный зал
                                    </Link>
                                </li>
                                <li>
                                    <Link to={AQUA_ROUTE} className={module.link + " " + module.item} onClick={() => mobile ? setMobile(!mobile) : ""}>
                                        <img width={40} height={40} src={imageDrop2} />
                                        Аквазона
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/group" className={module.link + " " + module.item} onClick={() => mobile ? setMobile(!mobile) : ""}>
                                        <img width={40} height={40} src={imageDrop3} />
                                        Групповые занятия
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/spa" className={module.link + " " + module.item} onClick={() => mobile ? setMobile(!mobile) : ""}>
                                        <img width={40} height={40} src={imageDrop4} />
                                        Спа и массаж
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/store" className={module.link + " " + module.item} onClick={() => mobile ? setMobile(!mobile) : ""}>
                                        <img width={40} height={40} src={shop} />
                                        Магазин
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <img className={module.drop} src={imageDrop} />
                        <Link to="/sales" className={module.link} onClick={() => mobile ? setMobile(!mobile) : ""}>
                            <span>Акции</span>
                        </Link>
                        <Link to="/cards" className={module.link} onClick={() => mobile ? setMobile(!mobile) : ""}>
                            <span>Карты</span>
                        </Link>
                        <Link to="/shedule" className={module.link} onClick={() => mobile ? setMobile(!mobile) : ""}>
                            <span>Расписание</span>
                        </Link>
                    </div>
                    <div className={module.text}>8 863 308-87-88</div>
                    <CustomButton onClick={logout} data-color="1" data-width='2' data-widthAnim='1' >
                        Выйти
                    </CustomButton>
                    <Link onClick={() => mobile ? setMobile(!mobile) : ""} to={ACCOUNT_ROUTE} className={module.btn} style={{
                        width: '300px'
                    }}>
                        <CustomButton data-color="1" data-width='3' data-widthAnim='2'>
                            Личный кабинет
                        </CustomButton>
                    </Link>
                </div>
                :
                <div className={module.navBarContainer + ' ' + module.notAuth}>
                    <Link onClick={() => mobile ? setMobile(!mobile) : ""} to={INTRO_ROUTE}>
                        <img className={module.white + ' ' + module.logo} src={imageLogo} />
                    </Link>
                    <Link onClick={() => mobile ? setMobile(!mobile) : ""} to={LOGIN_ROUTE} className={(window.screen.width <= 450) ? module.btn + " " + module.btnMobile : module.btn}>
                        <CustomButton data-color="1" data-width='2' data-widthAnim='1'>
                            Войти
                        </CustomButton>
                    </Link>
                </div>
            }



        </div>
    );
});

export default NavBar;