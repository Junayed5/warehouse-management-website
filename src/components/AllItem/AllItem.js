import React from 'react';

const AllItem = (props) => {
    const { _id, name, img, price, quantity, description, supplier } = props.product
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
                <p><small>Supplier:{supplier}</small></p>
                <button className='btn btn-danger'>Delete</button>
            </div>
        </div>
    );
};

export default AllItem;