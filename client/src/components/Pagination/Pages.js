import { observer } from 'mobx-react-lite';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Context } from '../..';
import modulePage from './Pages.module.css'

const Pages = observer(() => {
    const click = (page) => {
        product.setPages(page)

    }

    const { product } = useContext(Context)
    const pagesCount = Math.ceil(product.totalCountPages / product.limitPages)
    let storagePages = product.pages
    const pages = []
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1)
    }
    useEffect(() => {
        product.setLoading(true)
        setTimeout(() => {
            product.setLoading(false)
        }, 1000)
        console.log(product.pages)
    }, [storagePages])

    return (
        <div className={modulePage.Pagination}>
            {pages.map(page =>
                <button onClick={() => click(page)} className={modulePage.PaginationItem} key={page}>{page}</button>
            )}
        </div>
    );
});

export default Pages;