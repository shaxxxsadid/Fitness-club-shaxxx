import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../../../..';
import { createBrand, deleteBrand, fetchBrand, updateBrand } from '../../../../http query/ProductApiQuery';
import CustomButton from '../../CustomButton/CustomButton';
import CustomInput from '../../CustomInput/CustomInput';
import BrandSelect from '../../Select/BrandSelect';
import MyModal from '../MyModal';

const BrandModal = observer((props) => {
    const [brand, setBrand] = useState(1)
    const [brandName, setBrandName] = useState("")
    const { product } = useContext(Context)
    return (
        <MyModal visible={props.visibleBrand} setVisible={props.setVisibleBrand}>
            {
                props.delet ?
                    <CustomInput onChange={(event) => setBrand(Number(event.target.value))} type="number" placeholder='Введите Id бредна'></CustomInput>
                    : props.add ?
                        <CustomInput onChange={(event) => setBrandName(event.target.value)} type="text" placeholder='Введите название' />
                        :
                        <div style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            flexDirection: "column"
                        }}>
                            <BrandSelect onChange={(event) => setBrand(Number(event.target.value))} />
                            <CustomInput onChange={(event) => setBrandName(event.target.value)} type="text" placeholder='Введите название' />
                        </div>
            }
            <CustomButton data-width={3.5} data-widthAnim={3} onClick={() => {
                if (props.add && brandName) {
                    createBrand(brandName).then(data => {
                        props.setVisibleBrand(false)
                        fetchBrand().then(data => product.setBrands(data))
                        alert('Бренд успешно добавлен')
                    })
                } else {
                    if (props.add) { alert("Пустые поля") }
                    if (props.update && brandName && brand) {
                        updateBrand(brand, brandName).then(data => {
                            props.setVisibleBrand(false)
                            fetchBrand().then(data => product.setBrands(data))
                            alert('Бренд успешно изменен')
                        })
                    } else {
                        if (props.update) alert("Пустые поля")
                    }
                    if (props.delet && brand) {
                        deleteBrand(brand).then(data => {
                            props.setVisibleBrand(false)
                            fetchBrand().then(data => product.setBrands(data))
                            alert('Бренд успешно удален')
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

export default BrandModal;