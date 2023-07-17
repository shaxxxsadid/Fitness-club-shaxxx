import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../../../..';
import { createSuppliers, deleteSuppliers, fetchSuppliers, updateSuppliers } from '../../../../http query/ProductApiQuery';
import CustomButton from '../../CustomButton/CustomButton';
import CustomInput from '../../CustomInput/CustomInput';
import SupplierSelect from '../../Select/supplierSelect';
import MyModal from '../MyModal';

const SuppliersModal = observer((props) => {
    const [supllier, setSupllier] = useState(0)
    const [supllierName, setSupllierName] = useState("")
    const [supllierLastName, setSupllierLastName] = useState("")
    const [supllierOrg, setSupllierOrg] = useState("")
    const { product } = useContext(Context)
    return (
        <MyModal visible={props.visibleSuppliers} setVisible={props.setVisibleSuppliers}>
            {
                props.delet ?
                    <CustomInput onChange={(event) => setSupllier(Number(event.target.value))} type="number" placeholder='Введите Id бредна'></CustomInput>
                    : props.add ?
                        <div style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            flexDirection: "column"
                        }}>
                            <CustomInput onChange={(event) => setSupllierName(event.target.value)} type="text" placeholder='Введите имя' />
                            <CustomInput onChange={(event) => setSupllierLastName(event.target.value)} type="text" placeholder='Введите фамилия' />
                            <CustomInput onChange={(event) => setSupllierOrg(event.target.value)} type="text" placeholder='Введите организация' />
                        </div>
                        :
                        <div style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            flexDirection: "column"
                        }}>
                            <SupplierSelect onChange={(event) => setSupllier(Number(event.target.value))} />
                            <CustomInput onChange={(event) => setSupllierName(event.target.value)} type="text" placeholder='Введите имя' />
                            <CustomInput onChange={(event) => setSupllierLastName(event.target.value)} type="text" placeholder='Введите фамилия' />
                            <CustomInput onChange={(event) => setSupllierOrg(event.target.value)} type="text" placeholder='Введите организация' />
                        </div>
            }
            <CustomButton data-width={3.5} data-widthAnim={3} onClick={() => {
                if (props.add && supllierName) {
                    createSuppliers(supllierName, supllierLastName, supllierOrg).then(data => {
                        props.setVisibleSuppliers(false)
                        alert('Поставщик успешно добавлен')
                        setSupllier(1)
                        setSupllierLastName("")
                        setSupllierOrg("")
                    })
                } else {
                    if (props.add) { alert("Пустые поля") }
                    if (props.update && supllierName && supllier && supllierLastName && supllierOrg) {
                        deleteSuppliers(supllier, supllierName, supllierLastName, supllierOrg).then(data => {
                            props.setVisibleSuppliers(false)
                            alert('Поставщик успешно изменен')
                            fetchSuppliers().then(data => product.setSuppliers(data))
                            setSupllier(1)
                            setSupllierLastName("")
                            setSupllierOrg("")
                        })
                    } else {
                        if (props.update) alert("Пустые поля")
                    }
                    if (props.delet && supllier) {
                        updateSuppliers(supllier).then(data => {
                            props.setVisibleSuppliers(false)
                            alert('Поставщик успешно удален')
                            fetchSuppliers().then(data => product.setSuppliers(data))
                        })
                    } else {
                        if (props.delet) alert("Пустые поля")
                    }
                }
            }}>
                {props.add ? "Добавить" : props.delet ? "Удалить" : "Изменить"}
            </CustomButton>
        </MyModal>
    );
});

export default SuppliersModal;