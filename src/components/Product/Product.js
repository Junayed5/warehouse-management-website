import React from 'react';

const Product = (props) => {
    console.log(props.product);
    const { name, img, price, quantity, description, } = props.product
    return (
        <div className='col-lg-4 border'>
            <div>
                <img className='w-100' src={img} alt="" />
            </div>
            <div>
                <p><b>Name:{name}</b></p>
                <p>Price:{price}</p>
                <p><small>Quantity:{quantity}</small></p>
                <p><i>{description}</i></p>
                <button className='btn btn-secondary'>Manage</button>
            </div>
        </div>
    );
};

export default Product;