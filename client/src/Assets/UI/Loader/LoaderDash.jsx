import React from 'react';
import module from "./Loader.module.css";

const LoaderDash = (props) => {
    return (
        <div {...props} className={module.loader + " " + props.className}>
        </div>
    );
};

export default LoaderDash;