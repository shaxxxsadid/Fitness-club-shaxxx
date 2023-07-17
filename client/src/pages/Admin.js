import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import CustomButton from '../Assets/UI/CustomButton/CustomButton';
import module from '../Assets/UI/styles/admin.module.css';
import ProductModal from '../Assets/UI/ModalWin/modals/productModal';
import UserModal from '../Assets/UI/ModalWin/modals/UserModal';
import EmployeeModal from '../Assets/UI/ModalWin/modals/EmployeeModal';
import ServiceModal from '../Assets/UI/ModalWin/modals/ServiceModal';
import WorkoutModal from '../Assets/UI/ModalWin/modals/WorkoutModal';
import ButtonBox from '../Assets/UI/ButtonBox/ButtonBox';
import BrandModal from '../Assets/UI/ModalWin/modals/BrandModal';
import SuppliersModal from '../Assets/UI/ModalWin/modals/SuppliersModal';
import TrainingRooms from '../Assets/UI/ModalWin/modals/TrainingRooms';
import Schedule from '../Assets/UI/ModalWin/modals/Schedule';
import { fetchPosition } from '../http query/UserApiQuery';
import { Context } from '..';
const Admin = observer((props) => {

    const [visible, setVisible] = useState(false)
    const [add, setVisibleAdd] = useState(true)
    const [delet, setVisibleDelete] = useState(false)
    const [update, setVisibleUpdate] = useState(false)
    const [visibleUser, setVisibleUser] = useState(false)
    const [visibleEmployee, setVisibleEmployee] = useState(false)
    const [visibleService, setVisibleSevice] = useState(false)
    const [visibleGroup, setVisibleGroup] = useState(false)
    const [visibleBrand, setVisibleBrand] = useState(false)
    const [visibleSuppliers, setVisibleSuppliers] = useState(false)
    const [visibleTraining, setVisibleTraining] = useState(false)
    const [visibleShedule, setVisibleSchedule] = useState(false)
    const showBox = (add, delet, update) => {
        setVisibleAdd(add)
        setVisibleDelete(delet)
        setVisibleUpdate(update)
    }

    const { user } = useContext(Context)

    useEffect(() => {
        fetchPosition().then(data => user.setPositions(data))
    }, [])

    return (
        <div {...props}>
            <div className={module.adminContainer}>
                <div className={module.text}>Админ панель</div>
                <div className={module.caseBox}>
                    <CustomButton onClick={() => showBox(true, false, false)} data-width={2.5} data-widthAnim={2}>
                        Добавить
                    </CustomButton>
                    <CustomButton onClick={() => showBox(false, true, false)} data-width={2.5} data-widthAnim={2}>
                        Удалить
                    </CustomButton>
                    <CustomButton onClick={() => showBox(false, false, true)} data-width={2.5} data-widthAnim={2}>
                        Изменить
                    </CustomButton>
                </div>
                <ButtonBox
                    add={add}
                    delet={delet}
                    update={update}
                    setVisible={setVisible}
                    setVisibleUser={setVisibleUser}
                    setVisibleEmployee={setVisibleEmployee}
                    setVisibleSevice={setVisibleSevice}
                    setVisibleGroup={setVisibleGroup}
                    setVisibleBrand={setVisibleBrand}
                    setVisibleSuppliers={setVisibleSuppliers}
                    setVisibleTraining={setVisibleTraining}
                    setVisibleSchedule={setVisibleSchedule}
                />
                <ProductModal
                    add={add}
                    delet={delet}
                    update={update}
                    setVisible={setVisible}
                    visible={visible}
                />
                <UserModal
                    add={add}
                    delet={delet}
                    update={update}
                    setVisibleUser={setVisibleUser}
                    visibleUser={visibleUser}
                />
                <EmployeeModal
                    add={add}
                    delet={delet}
                    update={update}
                    setVisibleEmployee={setVisibleEmployee}
                    visibleEmployee={visibleEmployee}
                />
                <ServiceModal
                    add={add}
                    delet={delet}
                    update={update}
                    setVisibleSevice={setVisibleSevice}
                    visibleService={visibleService}
                />
                <WorkoutModal
                    add={add}
                    delet={delet}
                    update={update}
                    setVisibleGroup={setVisibleGroup}
                    visibleGroup={visibleGroup}
                />
                <BrandModal
                    add={add}
                    delet={delet}
                    update={update}
                    setVisibleBrand={setVisibleBrand}
                    visibleBrand={visibleBrand}
                />
                <SuppliersModal
                    add={add}
                    delet={delet}
                    update={update}
                    setVisibleSuppliers={setVisibleSuppliers}
                    visibleSuppliers={visibleSuppliers}
                />
                <TrainingRooms
                    add={add}
                    delet={delet}
                    update={update}
                    setVisibleTraining={setVisibleTraining}
                    visibleTraining={visibleTraining}
                />
                <Schedule
                    add={add}
                    delet={delet}
                    update={update}
                    setVisibleSchedule={setVisibleSchedule}
                    visibleShedule={visibleShedule}
                />
            </div>
        </div >

    );
});

export default Admin;