import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const {id , img , price , ratings , name , seller} = props.product;
    const handleAddToCart = props.handleAddToCart;
    
    return (
        <div className='border border-gray-400 rounded-xl product'>
            <div className='p-2'>
                <img src={img} alt={name} />
                <h6 className='text-xl my-2'>{name}</h6>
                <p className='font-semibold'>Price : ${price}</p>
                <p className='mt-1'><small>Manufacture : {seller}</small></p>
                <p><small>Ratings : {ratings}</small></p>
            </div>
            <div className='btn-div'>
                <button onClick={() => handleAddToCart(props.product)} className='bg-orange-200 btn-add-to-cart w-full py-4 font-semibold rounded-b-lg'>
                    Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </div>
    );
};

export default Product;