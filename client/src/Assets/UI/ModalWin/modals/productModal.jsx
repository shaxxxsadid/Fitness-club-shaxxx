import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { createProduct, deleteProduct, fetchOneProduct } from '../../../../http query/ProductApiQuery';
import CustomButton from '../../CustomButton/CustomButton';
import CustomInput from '../../CustomInput/CustomInput';
import BrandSelect from '../../Select/BrandSelect';
import SupplierSelect from '../../Select/supplierSelect';
import MyModal from '../MyModal';

const ProductModal = observer((props) => {
    const [products, setProducts] = useState({})
    const [brand, setBrand] = useState(1)
    const [supplier, setSupplier] = useState(1)
    const [NameProd, setNameProd] = useState("")
    const [file, setFile] = useState(null)
    const [cost, setCost] = useState(0)
    const [Description, setDescription] = useState("")
    const [delId, SetDelId] = useState(0)
    const delet = props.delet
    const add = props.add
    const update = props.update

    useEffect(() => {
        fetchOneProduct(delId).then(data => setProducts(data))
    }, [delId, SetDelId])

    return (
        <MyModal visible={props.visible} setVisible={props.setVisible}>
            {delet
                ?
                <CustomInput onChange={(event) => SetDelId(Number(event.target.value))} type="number" placeholder='Введите Id товара' />
                : add ?
                    <div style={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        flexDirection: "column"
                    }}>
                        <CustomInput onChange={(event) => setNameProd(event.target.value)} type="text" placeholder='Введите имя товара' />
                        <BrandSelect onChange={(event) => setBrand(Number(event.target.value))} />
                        <CustomInput onChange={(event) => setCost(event.target.value)} type="number" placeholder='Введите цену товара' />
                        <CustomInput onChange={(event) => setDescription(event.target.value)} type="text" placeholder='Описание товара' />
                        <SupplierSelect onChange={(event) => setSupplier(Number(event.target.value))}></SupplierSelect>
                        <CustomInput onChange={e => { setFile(e.target.files[0]) }} type="file" accept=".jpg,.jpeg" style={{
                            fontSize: "19px",
                            height: "60px"
                        }} />
                    </div>
                    :
                    ""
            }
            <CustomButton
                data-width={3.5}
                data-widthAnim={3}
                onClick={() => {
                    if (add && brand && supplier && cost && Description && NameProd && file) {
                        if (add) {
                            const formData = new FormData()
                            formData.append('ProductName', NameProd)
                            formData.append('BrandName', brand)
                            formData.append('Cost', `${cost}`)
                            formData.append('Description', `${Description}`)
                            formData.append('Supplier', supplier)
                            formData.append('img', file)
                            createProduct(formData).then(data => props.setVisible(false))
                        }
                    } else {
                        if (add) alert("Пустые поля")
                    }
                    if (delet && delId) {
                        if (delet) {

                            deleteProduct(delId, products.img).then(data => props.setVisible(false))
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
});

export default ProductModal;