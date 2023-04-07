import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan , faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { deleteShoppingCart } from '../../fakedb';
import { Link } from 'react-router-dom';


const Cart = ({cart}) => {
    
    let totalPrice = 0 ;
    let totalShipping = 0 ;
    let quantity = 0;
    for (const product of cart){
        if(product.quantity  === 0){
            product.quantity = 1;
        }
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }
    const tax = (totalPrice * 7) / 100 ;
    const grandTotal = totalPrice + totalShipping + tax ; 

    const handleDeleteCart = () =>{
        deleteShoppingCart();
        location.reload()
    }

    return (
        <div className='cart'>
            <h3 className='text-3xl text-center'>Order Summary</h3>
            <p className='my-3'>Selected Items : {quantity}</p>
            <p>Total Price : ${totalPrice}</p>
            <p className='my-2'>Total Shipping : ${totalShipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h6 className='my-2 font-bold text-xl'>Grand Total : ${grandTotal.toFixed(2)}</h6>
            <button onClick={handleDeleteCart} className='btn btn-error w-full text-white flex justify-between my-3'>
                <span>Clear Cart</span>
                <span><FontAwesomeIcon icon={faTrashCan} /> </span>
            </button>
            <Link to='/orders'>
                <button className='btn btn-warning w-full text-white flex justify-between'>
                    <span>Proceed Order</span>
                    <span><FontAwesomeIcon icon={faArrowRightLong} /> </span>
                </button>
            </Link>
        </div>
    );
};

export default Cart;