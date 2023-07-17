import React from 'react';
import module from '../CustomButton/СustmBtn.module.css';

const CustomButton = (props) => {
    return (
        <button {...props} className={module.mstmBtn}>
            {props.children}
        </button>
    );
};

export default CustomButton;