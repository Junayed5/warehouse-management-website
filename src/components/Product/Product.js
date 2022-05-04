import React from 'react';

const Product = (props) => {
    // console.log(props.product);
    const {name,img} = props.product
    return (
        <div className='col-lg-4'>
            <img src={img} alt="" />
            <h2>Name:{name}</h2>
        </div>
    );
};

export default Product;