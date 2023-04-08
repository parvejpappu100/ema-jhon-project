import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const savedCart = useLoaderData();

    const [cart , setCart] = useState(savedCart);

    const handleRemoveCartFromDb = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }

    const handleDeleteCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div>
            <div className=' lg:container mx-auto  gap-3 grid md:grid-cols-4 lg:grid-cols-5'>
                <div className='md:col-span-2 lg:col-span-3 row-span-2   mt-20'>
                    {
                        cart.map(product => <ReviewItem
                        key={product.id}
                        product = {product}
                        handleRemoveCartFromDb = {handleRemoveCartFromDb}
                        ></ReviewItem>)
                    }
                </div>
                <div className=' sticky top-0 bg-orange-200 pt-5 p-5 md:col-span-2 lg:col-span-2'>
                    <Cart cart={cart} handleDeleteCart = {handleDeleteCart}>
                        <Link to='/checkout'>
                            <button className='btn btn-warning w-full text-white flex justify-between'>
                               <span>Proceed Checkout</span>
                               <span><FontAwesomeIcon icon={faArrowRightLong} /></span>
                            </button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;