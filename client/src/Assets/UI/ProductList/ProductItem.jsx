import React from 'react';
import { useNavigate } from 'react-router-dom'
import { PRODUCT_ROUTE } from '../../../utils/configRoutes';
import module from '../styles/store.module.css'

const ProductItem = ({ product }) => {
    const history = useNavigate()
    return (
        <div style={{
            cursor: "pointer"
        }}
            className={module.productInfo}
            onClick={() => history(PRODUCT_ROUTE + '/' + product.ProductId)}
        >
            <div style={{
                overflow: "hidden"
            }}>
                <img key={product.ProductId} src={'http://185.190.182.82:5000/' + product.img} style={{
                    height: "300px",
                }} />
            </div>
            <div style={{
                maxWidth: "400px",
                textAlign: "center",
                marginTop: "5px",
                fontSize: "24px"
            }}>{product.ProductName}</div>
        </div>
    );
};

export default ProductItem;