import React from 'react';
import module from '../styles/admin.module.css';
import ButtonItem from './ButtonItem';

const ButtonBox = (props) => {
    const delet = props.delet
    const add = props.add
    const update = props.update
    return (
        <div className={module.btnBox}>
            <ButtonItem className={update ? module.hidden + " " + module.btnItem : ""} onClick={() => props.setVisible(true)} name={add ? "Добавить Товар" : delet ? "Удалить Товар" : "Изменить Товар"} />
            <ButtonItem className={module.btnItem} onClick={() => props.setVisibleUser(true)} name={add ? "Добавить Пользователя" : delet ? "Удалить Пользователя" : "Изменить Пользователя"} />
            <ButtonItem className={module.btnItem} onClick={() => props.setVisibleEmployee(true)} name={add ? "Добавить Сотрудника" : delet ? "Удалить Сотрудника" : "Изменить Сотрудника"} />
            <ButtonItem className={module.btnItem} onClick={() => props.setVisibleSevice(true)} name={add ? "Добавить Услугу" : delet ? "Удалить Услугу" : "Изменить Услугу"} />
            <ButtonItem className={module.btnItem} onClick={() => props.setVisibleGroup(true)} name={add ? "Добавить тренировку" : delet ? "Удалить тренировку" : "Изменить тренировку"} />
            <ButtonItem className={module.btnItem} onClick={() => props.setVisibleBrand(true)} name={add ? "Добавить бренд" : delet ? "Удалить бренд" : "Изменить бренд"} />
            <ButtonItem className={module.btnItem} onClick={() => props.setVisibleSuppliers(true)} name={add ? "Добавить поставщика" : delet ? "Удалить поставщика" : "Изменить поставщика"} />
            <ButtonItem className={module.btnItem} onClick={() => props.setVisibleTraining(true)} name={add ? "Добавить зал" : delet ? "Удалить зал " : "Изменить зал "} />
            <ButtonItem className={update ? module.hidden + " " + module.btnItem  : ""} onClick={() => props.setVisibleSchedule(true)} name={add ? "Добавить в расписание " : delet ? "Удалить из расписания " : "Изменить в расписание"} />
        </div>
    );
};

export default ButtonBox;