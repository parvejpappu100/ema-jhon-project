import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products , setProducts] = useState([]);
    useEffect( () => {
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])
    return (
        <div className='shop-container lg:container mx-auto'>
            <div className='grid grid-cols-3 gap-10 mt-20'>
                {
                    products.map(product => <Product
                    product = {product}
                    key = {product.id}
                    ></Product>)
                }
            </div>
            <div className='cart'>
                <h1>Order Summary</h1>
            </div>
        </div>
    );
};

export default Shop;