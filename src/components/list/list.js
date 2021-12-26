import React, { useState } from 'react'
import Product from '../product/product'
import sortBy from "lodash/sortBy";
import './list.css'

const List = (props) => {
    const { products,setProducts, setCurrentProduct } = props
    const [search, setSearch] = useState('')
    
    const changeSort = (value) => {
        setProducts(sortBy(products, value));
    }
    return (
        <>
            <div id="headerList">
                <input id="search" type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} placeholder='search' />
                <div id='sort'>
                    <p id="sortLabel">sort by</p>
                    <select name="sortSelect" id="sortSelect" onChange={(e) => { changeSort(e.target.value) }}>
                        <option value="name">name</option>
                        <option value="price">price</option>
                    </select>
                </div>
            </div>
            <div>
                {products && products.filter(x => x.name.includes(search)).map((product, index) => {
                    return <Product key={product.id} index={index} product={product} setCurrentProduct={setCurrentProduct} />
                })}
            </div>
        </>
    )
}

export default List
