import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaVk, FaOdnoklassniki, FaTelegram } from 'react-icons/fa';
import module from '../Assets/UI/styles/intro.module.css';
import imageLogo from '../Assets/Pictures/LOGO2.svg';
import logo from '../Assets/Pictures/Navbar/LOGO.svg';
import zal1 from '../Assets/Pictures/intro/zal1.png';
import zal2 from '../Assets/Pictures/intro/zal2.png';
import zal3 from '../Assets/Pictures/intro/zal3.png';
import zal4 from '../Assets/Pictures/intro/zal4.png';
import zal5 from '../Assets/Pictures/intro/zal5.png';
import zal6 from '../Assets/Pictures/intro/zal6.png';
import zal7 from '../Assets/Pictures/intro/zal7.png';
import zal8 from '../Assets/Pictures/intro/zal8.png';
import angle1 from "../Assets/Pictures/intro/ComponentAngle.png";
import service1 from '../Assets/Pictures/intro/service1.png';
import service2 from '../Assets/Pictures/intro/service2.png';
import service3 from '../Assets/Pictures/intro/service3.png';
import service4 from '../Assets/Pictures/intro/service4.png';
import google from '../Assets/Pictures/intro/GooglePlay.png';
import apple from '../Assets/Pictures/intro/AppleStore.png';
import angle from '../Assets/Pictures/intro/angle.png';
import Slider from '../Assets/UI/Slider/Slider';
import CustomButton from '../Assets/UI/CustomButton/CustomButton'
import { GYM_ROUTE } from '../utils/configRoutes';

const Intro = () => {
    const [scroll, setScroll] = useState(0);
    const onScroll = useCallback(() => setScroll(Math.round(window.scrollY)), []);
    useEffect(() => {
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [onScroll]);

    return (
        <div className={module.intro}>
            <div className={module.container}>
                <div className={module.text}>
                    <img src={imageLogo} loading="lazy" />
                    <img src={angle} className={module.angler} loading="lazy" />
                    <img src={angle} className={module.anglel} loading="lazy" />
                    <div className={module.txt}>
                        Семейный фитнес-клуб в Ростове-на-Дону с уютным дизайном,
                        высокотехнологичным вентиляционным оснащением, профессиональным штатом инструкторов.
                        В вашем распоряжении просторный тренажёрный зал с профессиональным оборудованием и кардиозоной, два зала групповых программ с множеством разнообразных тренировок, зона многофункционального тренинга.
                    </div>
                </div>
                <div className={module.slide}>
                    <Slider>
                        <div className={module.item}><img src={zal1} loading="lazy" /></div>
                        <div className={module.item}><img src={zal2} loading="lazy" /></div>
                        <div className={module.item}><img src={zal3} loading="lazy" /></div>
                        <div className={module.item}><img src={zal4} loading="lazy" /></div>
                        <div className={module.item}><img src={zal5} loading="lazy" /></div>
                        <div className={module.item}><img src={zal6} loading="lazy" /></div>
                        <div className={module.item}><img src={zal7} loading="lazy" /></div>
                        <div className={module.item}><img src={zal8} loading="lazy" /></div>
                    </Slider>

                </div>
            </div>
            <div className={module.container + ' ' + module.title}>
                <img src={angle} className={module.angler} loading="lazy" />
                <img src={angle} className={module.anglel} loading="lazy" />
                <div style={{
                    overflow: 'hidden'
                }}>
                    <div className={((scroll > 100 && scroll < 1600) || (window.screen.width <= 500) || (window.screen.width <= 800)) ? module.txt + ' ' + module.up : module.txt + ' ' + module.hidden}>Все фитнес-услуги рядом с домом на Северном</div>
                </div>
                <div className={module.horizont}>
                    <hr className={((scroll > 400 && scroll < 1650) || (window.screen.width <= 800)) ? module.animationWidth : module.hidden} />
                    <hr className={((scroll > 400 && scroll < 1650) || (window.screen.width <= 800)) ? module.animationWidth : module.hidden} />
                </div>
            </div>
            <div className={module.container + ' ' + module.service}>
                <div className={module.serviceBlock}>
                    <Link to={'/aqua'} className={module.serviceItem}>
                        <img src={service1} loading="lazy" />
                        <div className={module.serviceText + " " +module.serviceSpecial}>
                            <img src={angle1} />
                            Посещение бассейна
                            <img src={angle1} style={{
                                transform: "rotateZ(180deg)"
                            }} />
                        </div>
                    </Link>
                    <Link to={GYM_ROUTE} className={module.serviceItem}>
                        <img src={service2} loading="lazy" />
                        <div className={module.serviceText}>
                            <img src={angle1} />
                            Тренажерный зал
                            <img src={angle1} style={{
                                transform: "rotateZ(180deg)"
                            }} />
                        </div>
                    </Link>
                </div>
                <div className={module.serviceBlock}>
                    <Link to="/group" className={module.serviceItem}>
                        <img src={service3} loading="lazy" />
                        <div className={module.serviceText}>
                            <img src={angle1} />
                            Групповые занятия
                            <img src={angle1} style={{
                                transform: "rotateZ(180deg)"
                            }} />
                        </div>
                    </Link>
                    <Link to="/spa" className={module.serviceItem}>
                        <img src={service4} loading="lazy" />
                        <div className={module.serviceText}>
                            <img src={angle1} />
                            Массаж и Сауна
                            <img src={angle1} style={{
                                transform: "rotateZ(180deg)"
                            }} />
                        </div>
                    </Link>
                </div>
            </div>
            <div className={module.container + ' ' + module.info}>
                <div className={module.inctructors}>
                    <div className={module.titletext}>
                        Команда <br /> СпортСити Северный
                    </div>
                    <div className={module.textinfo}>
                        Каждый из 40 профессиональных тренеров готов помочь вам добиться поставленной цели
                    </div>
                </div>
                <div className={module.orgInfo}>
                    <div className={module.map}>
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9761f7a0dd00eddd391c6e99efd8800749791a97d06493ac2bd5211609cddd22&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
                    </div>
                    <div className={module.titletext}>
                        <div className={module.textblock}>
                            СпортСити Северный<br />
                            Фитнес рядом с домом
                            <br /><br />
                            8 863 308-87-88
                            <br /><br />
                            sever@sportcity-rostov.ru<br />
                            бул. Комарова, 28 Е, г. Ростов-на-Дону
                        </div>
                        <div className={module.textblock}>
                            Время работы клуба<br />
                            Пн—пт с 7:00 до 23:00<br />
                            Сб с 8:00 до 22:00<br />
                            Вс с 9:00 до 21:00<br />
                            <a href='https://vk.com/sportcityrostov'>
                                <FaVk className={module.icon}></FaVk>
                            </a>
                            <a href='https://ok.ru/group/53884461056173'>
                                <FaOdnoklassniki to="" className={module.icon}></FaOdnoklassniki>
                            </a>
                            <a href='https://t.me/sportcityfitness'>
                                <FaTelegram to="" className={module.icon}></FaTelegram>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={module.container + " " + module.App}>
                <div className={module.titleApp}>
                    Приложение для iOS и Android
                </div>
                <div className={module.textApp}>
                    Получайте специальные предложения,
                    расписание клуба и его изменения
                </div>
                <div>
                    <a href='https://play.google.com/store/apps/details?id=me.fitcloud.app.sportcity.android'>
                        <img src={google} style={{
                            width: "300px",
                            height: "78px"
                        }} />
                    </a>
                    <a href='https://apps.apple.com/ru/app/id908929222'>
                        <img src={apple} style={{
                            width: "300px",
                            height: "78px"
                        }} />
                    </a>
                </div>
            </div>
            <div className={module.container + " " + module.footer}>
                <Link to={'/intro'}>
                    <img src={logo} />
                </Link>
                <a href='https://vk.com/sportcityrostov'>
                    <FaVk className={module.icon}></FaVk>
                </a>
                <a href='https://ok.ru/group/53884461056173'>
                    <FaOdnoklassniki to="" className={module.icon}></FaOdnoklassniki>
                </a>
                <a href='https://t.me/sportcityfitness'>
                    <FaTelegram to="" className={module.icon}></FaTelegram>
                </a>
            </div>
        </div>
    );
};

export default Intro;