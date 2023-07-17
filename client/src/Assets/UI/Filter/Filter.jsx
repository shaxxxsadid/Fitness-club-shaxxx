import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../../..';
import module from '../styles/store.module.css'

const Filter = observer(() => {
    const active = document.getElementsByClassName(module.item)
    const { product } = useContext(Context)
    const handleToggle = (brand) => {
        for (let i = 0; i < active.length; i++) {
            active[i].classList.remove(module.active)
        }
        active[brand -1].classList.add(module.active)
    };
    return (
        <ul style={{
            listStyle: "none"
        }}>
            {product.brands.map(brand =>
                <li
                    onClick={() => {
                        handleToggle(brand.BrandId)
                        product.setSelectedBrand(brand)
                        product.setPages(1)
                    }}
                    className={module.item}
                    key={brand.BrandId}
                >
                    {brand.BrandName}
                </li>
            )}
        </ul>
    );
});

export default Filter;