import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { FaRubleSign } from 'react-icons/fa';
import { Context } from '..';
import module from '../Assets/UI/styles/product.module.css';
import { useParams } from 'react-router-dom';
import { fetchBrand, fetchOneProduct } from '../http query/ProductApiQuery';
import LoaderDash from '../Assets/UI/Loader/LoaderDash';


const Product = () => {
    const [products, setProducts] = useState({})
    const [isLoading, setisLoading] = useState(true)
    const { id } = useParams()
    const { product } = useContext(Context)
    useEffect(() => {
        setTimeout(fetchBrand().then(data => product.setBrands(data)), 1000)
        fetchOneProduct(id).then(data => setProducts(data)).finally(() => setisLoading(false))
    }, [])


    return (
        <div>
            {(isLoading) ?
                <div className={module.container}>
                    <LoaderDash/>
                </div>
                    :
                    <div className={module.container}>
                        <div className={module.block}>

                            <img
                                src={'http://185.190.182.82:5000/' + products.img}
                            />

                        </div>
                        <div className={module.block}>
                            <div className={module.blockItem}>
                                {products.ProductName}
                            </div>
                            <div className={module.blockItem}>
                                {product.brands.map(brand => brand.BrandId === products.BrandName ? `Производитель: ${brand.BrandName}` : "")}
                            </div>
                            <div className={module.blockItem}>
                                Стоимость: {products.Cost} <FaRubleSign />
                            </div>
                            <span style={{
                                fontSize: "28px",
                                marginBottom: "20px"
                            }}>Описание:</span>
                            <div className={module.blockItem}>
                                <span>{products.Description}</span>
                            </div>
                        </div>
                    </div>
            }
        </div>

    );
};

            export default Product;