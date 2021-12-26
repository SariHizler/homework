
import './products.css'; import data from '../../data.json'
import EditedProduct from '../editedProduct/editedProduct'
import List from '../list/list'
import React, { useState } from 'react'


function Products() {
    const [products, setProducts] = useState(data)
    const [currentProduct, setCurrentProduct] = useState()
    const isMobile = window.innerWidth < 1000 ? true : false

    const updatedProduct = (product) => {
        const index = products.findIndex(x => x.id === product.id)

        setProducts((products) => ([
            ...products.slice(0, index),
            {
                ...products[index] = product
            },
            ...products.slice(index + 1)

        ]))

    }

    return (
        <div id="products">
            
            <div id="list" style={(currentProduct && !isMobile) ? { width: '50%' } : currentProduct ? { width: '0%' } : { width: '100%' }}>
                <List products={products} setProducts={setProducts} setCurrentProduct={setCurrentProduct}/>
            </div>

            {currentProduct &&
                <div style={isMobile ? { width: '100%' } : { width: '50%' }}>
                    <EditedProduct currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} updatedProduct={updatedProduct} />
                </div>
            }
        </div >

    );
}

export default Products;
