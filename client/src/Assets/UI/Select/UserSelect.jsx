import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '../../..';
import { fetchUser } from '../../../http query/UserApiQuery';
import module from '../../UI/styles/admin.module.css';

const UserSelect = observer((props) => {
    const { user } = useContext(Context)
    useEffect(() => {
        fetchUser().then(data => user.setUsers(data))
    }, [])
    return (
        <select
            className={module.select}
            {...props}
        >
            <option disabled value="value1">Логин сотрудника</option>
            {user.users.map(option =>
                <option key={option.UserId} value={option.UserId}>
                    {option.Login}
                </option>
            )}
        </select>
    );
});

export default UserSelect;