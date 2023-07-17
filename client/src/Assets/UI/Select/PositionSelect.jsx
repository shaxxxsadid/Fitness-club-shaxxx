import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '../../..';
import { fetchPosition } from '../../../http query/UserApiQuery';
import module from '../../UI/styles/admin.module.css';

const PositionSelect = observer((props) => {
    const { user } = useContext(Context)
    useEffect(() => {
        fetchPosition().then(data => user.setPositions(data))
    }, [])
    return (
        <select
            className={module.select}
            {...props}
        >
            <option disabled value="value1">Должность сотрудника</option>
            {user.positions.map(option =>
                <option key={option.PositionId} value={option.PositionId}>
                    {option.PositionName}
                </option>
            )}
        </select>
    );
});

export default PositionSelect;