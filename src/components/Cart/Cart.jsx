import React from 'react';

const Cart = () => {
    return (
        <div className='cart'>
            <h3 className='text-3xl text-center'>Order Summary</h3>
            <p className='my-3'>Selected Items : </p>
            <p>Total Price : $</p>
            <p className='my-2'>Total Shipping : $</p>
            <p>Tax : $</p>
            <h6 className='my-2 font-bold text-xl'>Grand Total : $</h6>
        </div>
    );
};

export default Cart;