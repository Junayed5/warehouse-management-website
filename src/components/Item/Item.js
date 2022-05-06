import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
    const searchId = useParams();
    const [product, setProduct] = useState({});
    const {_id,img,name,price,quantity,description,supplier} = product;
    useEffect(() => {
        const id = searchId.productId;
        const url = `https://protected-coast-77549.herokuapp.com/product/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [searchId.productId])
    return (
        <div className='border w-25 mx-auto text-start'>
            <img className='w-100' src={img} alt="" />
            <p className='mb-1'><small>Product ID:{_id}</small></p>
            <h4 className='text-center'>Name:{name}</h4>
            <p className='mb-1'>Price:{price}</p>
            <p className='mb-1'>Quantity:{quantity}</p>
            <p className='mb-1'>Supplier:{supplier}</p>
            <p><small>Description:{description}</small></p>
            <button className='btn btn-info w-100'>Delivered</button>
        </div>
    );
};

export default Item;