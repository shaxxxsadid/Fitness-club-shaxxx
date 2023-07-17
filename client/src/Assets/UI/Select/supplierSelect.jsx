import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '../../..';
import { fetchSuppliers } from '../../../http query/ProductApiQuery';
import module from '../../UI/styles/admin.module.css';

const SupplierSelect = observer((props) => {
    const { product } = useContext(Context)
    useEffect(() => {
        fetchSuppliers().then(data => product.setSuppliers(data))
    }, [])
    return (
        <select
            {...props}
            className={module.select}
        >
            <option disabled value="value1">Укажите поставщика</option>
            {product.suppliers.map(option =>
                <option key={option.SupplierId} value={option.SupplierId}>
                    {option.OrganizationName}
                </option>
            )}
        </select>
    );
});

export default SupplierSelect;