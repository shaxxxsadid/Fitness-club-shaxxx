import React, { useContext, useEffect, useState } from 'react';
import Filter from '../Assets/UI/Filter/Filter';
import module from '../Assets/UI/styles/store.module.css'
import ProductList from '../Assets/UI/ProductList/ProductList'
import { observer } from 'mobx-react-lite';
import { fetchAllProducts, fetchBrand } from '../http query/ProductApiQuery';
import { Context } from '..';
import Pages from '../components/Pagination/Pages';
import LoaderDash from '../Assets/UI/Loader/LoaderDash';

const StoreInfo = observer(() => {
    const [isLoading, setIsLoading] = useState(true)
    const { product } = useContext(Context)
    useEffect(() => {
        fetchBrand().then(data => product.setBrands(data))
        fetchAllProducts().then(data => {
            product.setProducts(data.rows)
            product.setTotalCountPages(data.count)
        })
    }, [])

    useEffect(() => {
        fetchAllProducts(product.selectedBrand.BrandId, product.pages, 6).then(data => {
            product.setProducts(data.rows)
            product.setTotalCountPages(data.count)
        }).finally(setIsLoading(false))
    }, [product.pages, product.selectedBrand])
    return (
        <div className={module.container}>
            <div className={module.list}>
                <div className={module.listTitle}>
                    Бренды
                </div>
                <Filter />
            </div>

            {isLoading
                ? <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "90%"
                }}><LoaderDash /></div>
                : <div className={module.storeBox}>
                    {product.isLoading ?
                        <div style={{
                            display: "flex",
                            justifyContent:"center",
                            alignItems:"center",
                            minWidth: "600px",
                            minHeight: "600px",
                            width:"1350px",
                            height:"800px"
                        }}>
                            <LoaderDash />
                        </div>
                        :
                        <ProductList />
                    }
                    <Pages />
                </div>
            }
        </div>
    );
});

export default StoreInfo;