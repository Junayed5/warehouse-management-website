import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props.product);
    const {_id, name, img, price, quantity, description, } = props.product
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
                <Link to={`/product/${_id}`}>
                    <button className='btn btn-secondary w-75'>Manage</button>
                </Link>
            </div>
        </div>
    );
};

export default Product;