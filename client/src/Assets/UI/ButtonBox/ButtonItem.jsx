import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import module from '../styles/admin.module.css';

const ButtonItem = (props) => {
    return (
        <div className={module.btnItem + " " + props.className}>
            <CustomButton
                {...props}
                data-width={3.5}
                data-widthAnim={3}>
                {props.name}
            </CustomButton>
        </div>
    );
};

export default ButtonItem;