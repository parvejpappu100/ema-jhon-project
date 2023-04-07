import React from 'react';
import Cart from '../Cart/Cart';

const Orders = () => {
    return (
        <div>
            <div className=' lg:container mx-auto  gap-3 grid md:grid-cols-4 lg:grid-cols-5'>
                <div className='md:col-span-3 lg:col-span-4 row-span-2 grid grid-cols-1 md:grid-cols-2      lg:grid-cols-3 gap-2 lg:gap-5  mt-20'>
                    <h1>This is order page</h1>
                </div>
                <div className=' sticky top-0 bg-orange-200 pt-5 p-5'>
                    <Cart cart={[]}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;