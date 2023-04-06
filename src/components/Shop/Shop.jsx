import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart , setCart] = useState([]);

    useEffect( () => {
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])

    const handleAddToCart = (product) =>{
        const newCart = [...cart , product];
        setCart(newCart);
    }

    return (
        <div className=' lg:container mx-auto  gap-3 grid md:grid-cols-4 lg:grid-cols-5'>
            <div className='md:col-span-3 lg:col-span-4 row-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5  mt-20'>
                {
                    products.map(product => <Product
                    product = {product}
                    key = {product.id}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className=' sticky top-0 bg-orange-200 pt-5 p-5'>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;