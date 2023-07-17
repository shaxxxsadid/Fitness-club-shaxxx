import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '../../..';
import { fetchEmployee } from '../../../http query/UserApiQuery';
import module from '../../UI/styles/admin.module.css';

const SelectEmployee = observer((props) => {
    const { user } = useContext(Context)
    useEffect(() => {
        fetchEmployee().then(data => user.setEmployees(data))
    }, [])
    const check = (employeeAccount, positions) => {
        const newPposition = user.positions.find(option => option.PositionId === positions)
        return user.users.map(checkUser => (checkUser.UserId === employeeAccount) ? `${checkUser.Name} ${checkUser.LastName} ${newPposition.PositionName}` : "")
    }
    return (
        <select
            className={module.select}
            {...props}
        >
            <option disabled value="value1">Cотрудники</option>
            {user.employees.map(option =>
                <option key={option.EmployeesId} value={option.EmployeesId}>
                    {check(option.EmployeeAccount, option.Position)}
                </option>
            )}
        </select>
    );
});

export default SelectEmployee;