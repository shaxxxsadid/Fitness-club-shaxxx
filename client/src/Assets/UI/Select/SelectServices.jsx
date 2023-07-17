import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '../../..';
import { fetchAllServices } from '../../../http query/ServicesApiQouery';
import module from '../../UI/styles/admin.module.css';

const SelectServices = observer((props) => {
    const { service } = useContext(Context)
    useEffect(() => {
        fetchAllServices().then(data => service.setServices(data))
    }, [])
    return (
        <select
            className={module.select}
            {...props}
        >
            <option disabled value="value1">Укажите сервис</option>
            {service.services.map(option =>
                <option key={option.ServicesId} value={option.ServicesId}>
                    {option.ServicesName}
                </option>
            )}
        </select>
    );
});

export default SelectServices;