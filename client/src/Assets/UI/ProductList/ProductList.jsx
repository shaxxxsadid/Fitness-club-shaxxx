import { observer } from 'mobx-react-lite';
import React from 'react';
import { useContext } from 'react';
import { Context } from '../../..';
import module from '../styles/store.module.css'
import ProductItem from './ProductItem';

const ProductList = observer(() => {
    const { product } = useContext(Context)
    return (
        <div className={module.productBox}>
            
            {product.products.map(production =>
                <ProductItem key={product.ProductId} product={production} />
            )}

        </div>
    );
});

export default ProductList;