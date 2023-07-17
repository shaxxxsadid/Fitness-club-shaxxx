import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '../../..';
import { fetchBrand } from '../../../http query/ProductApiQuery';
import module from '../../UI/styles/admin.module.css';

const BrandSelect = observer((props) => {
    const { product } = useContext(Context)
    useEffect(() => {
        fetchBrand().then(data => product.setBrands(data))
    }, [])
    return (
        <select
            className={module.select}
            {...props}
        >
            <option disabled value="value1">Укажите бренд</option>
            {product.brands.map(option =>
                <option key={option.BrandId} value={option.BrandId}>
                    {option.BrandName}
                </option>
            )}
        </select>
    );
});

export default BrandSelect;