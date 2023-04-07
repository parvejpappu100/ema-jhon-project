import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { addToDb, getShoppingCart } from '../../fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart , setCart] = useState([]);

    useEffect( () => {
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])

    useEffect( () => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart);

    } , [products])

    const handleAddToCart = (product) =>{
        const newCart = [...cart , product];
        setCart(newCart);
        addToDb(product.id)
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
                <Cart cart = {cart}>
                    <Link to='/orders'>
                        <button className='btn btn-warning w-full text-white flex justify-between'>
                            <span>Review Order</span>
                            <span><FontAwesomeIcon icon={faArrowRightLong} /></span>
                        </button>   
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;