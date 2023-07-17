import React from 'react';
import module from "./Loader.module.css"

const Loader = () => {
    return (
        <div className={module.circle }>
            <svg>
                <circle cx="205" cy="205" r="205" id="mm"></circle>
            </svg>
        </div>
    );
};

export default Loader;