import React, { useContext, useEffect } from 'react';
import { Context } from '../../..';
import { fetchAllCards } from '../../../http query/UserApiQuery';
import module from '../../UI/styles/admin.module.css';

const ClubCard = (props) => {
    const { user } = useContext(Context)
    useEffect(() => {
        fetchAllCards().then(data => user.setClubCard(data))
    }, [])
    return (
        <select
            {...props}
            className={module.select}

        >
            <option disabled value="value1">Укажите клубную карту (не обязательно)</option>
            {user.clubCards.map(option =>
                <option key={option.NumberCard} value={option.NumberCard}>
                    {option.NumberCard}
                </option>
            )}
        </select>
    );
};

export default ClubCard;