import React, { useContext, useState } from 'react';
import { Context } from '../../../..';
import { fetchAllServices } from '../../../../http query/ServicesApiQouery';
import { createService, deleteServices, updateService } from '../../../../http query/UserApiQuery';
import CustomButton from '../../CustomButton/CustomButton';
import CustomInput from '../../CustomInput/CustomInput';
import SelectEmployee from '../../Select/SelectEmployee';
import SelectServices from '../../Select/SelectServices';
import MyModal from '../MyModal';

const ServiceModal = (props) => {
    const [cost, setCost] = useState(0)
    const [employee, setEmployee] = useState(1)
    const [nameService, setNameService] = useState("")
    const [services, setService] = useState(1)
    const [delId, SetDelId] = useState(0)
    const delet = props.delet
    const add = props.add
    const update = props.update
    const { service } = useContext(Context)
    return (
        <MyModal visible={props.visibleService} setVisible={props.setVisibleSevice}>
            {delet
                ?
                <CustomInput onChange={(event) => SetDelId(Number(event.target.value))} type="number" placeholder='Введите Id услуги' />
                : add ?
                    <div style={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        flexDirection: "column"
                    }}>
                        <CustomInput onChange={(event) => setNameService(event.target.value)} type="text" placeholder='Введите название услуги' />
                        <CustomInput onChange={(event) => setCost(event.target.value)} type="number" placeholder='Введите стоимость услуги' />
                        <SelectEmployee onChange={(event) => setEmployee(Number(event.target.value))} />
                    </div>
                    :
                    <div style={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        flexDirection: "column"
                    }}>
                        <SelectServices onChange={(event) => setService(event.target.value)} />
                        <CustomInput onChange={(event) => setNameService(event.target.value)} type="text" placeholder='Введите название услуги' />
                        <CustomInput onChange={(event) => setCost(event.target.value)} type="number" placeholder='Введите стоимость услуги' />
                        <SelectEmployee onChange={(event) => setEmployee(Number(event.target.value))} />
                    </div>
            }
            <CustomButton data-width={3.5} data-widthAnim={3} onClick={() => {
                if (add && nameService && cost && employee) {
                    createService(nameService, cost, employee).then(data => {
                        props.setVisibleSevice(false)
                        fetchAllServices().then(data => service.setServices(data))
                    })

                } else {
                    if (update && services && nameService && cost && employee) {
                        updateService(services, nameService, cost, employee).then(data => {
                            props.setVisibleSevice(false)
                            alert(data)
                            fetchAllServices().then(data => service.setServices(data))
                        })
                    }
                    if (add) alert("Пустые поля")
                }
                if (delet && delId) {
                    if (delet) {
                        deleteServices(delId).then(data => {
                            props.setVisibleSevice(false)
                            alert(data)
                            fetchAllServices().then(data => service.setServices(data))
                        })
                    }
                } else {
                    if (delet) alert("Пустые поля")
                }
            }}>
                {add ?
                    'Добавить'
                    :
                    delet ? 'Удалить' : 'Изменить'
                }
            </CustomButton>
        </MyModal>
    );
};

export default ServiceModal;