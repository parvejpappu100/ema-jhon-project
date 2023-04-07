import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product}) => {
    const {price ,quantity ,  img , name , shipping} = product;
    console.log(product)
    return (
        <div className='rounded-md p-2 mb-5 border border-gray-300 flex items-center justify-between'>
            <div className='flex items-center gap-5'>
                <img className='w-1/5 h-1/5 rounded-md' src={img} alt="" />
                <div>
                    <h5 className='font-medium text-xl'>{name}</h5>
                    <p>Price : <span className='text-orange-400 font-medium'>${price}</span></p>
                    <p>Shipping Charge : <span className='text-orange-400 font-medium'>${shipping}</span></p>
                    <p>Quantity : <span className='text-orange-400 font-medium'>{quantity}</span></p>
                </div>
            </div>
            <button className=' text-red-500 px-6'>
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>
    );
};

export default ReviewItem;