import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
    const searchId = useParams();
    const id = searchId.productId;
    const [product, setProduct] = useState({});
    const { _id, img, name, price, quantity, description, supplier } = product;
    
    useEffect(() => {
        const url = `https://protected-coast-77549.herokuapp.com/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [product]);



    const handleDelivered = () => {
        // console.log(id);
        // const productId = id;
        const productQuantity = { quantity: quantity - 1 }

        const url = `https://protected-coast-77549.herokuapp.com/products/${_id}`;
        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productQuantity),
        })
            .then(response => response.json())
            .then(member => {
                console.log('Success:', member);
                setProduct(product);
            })
    }

    const handleRestock = event => {
        event.preventDefault();
        const restockValue = event.target.restock.value;
        const value = parseInt(restockValue);
        const restock = {quantity:parseInt(quantity) + value};

        const url = `https://protected-coast-77549.herokuapp.com/products/${_id}`;
        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(restock),
        })
            .then(response => response.json())
            .then(member => {
                console.log('Success:', member);
                setProduct(product);
            });
        
    }

    return (
        <div>
            <div className='border w-25 mx-auto text-start'>
                <img className='w-100' src={img} alt="" />
                <p className='mb-1'><small>Product ID:{_id}</small></p>
                <h4 className='text-center'>Name:{name}</h4>
                <p className='mb-1'>Price:{price}</p>
                <p className='mb-1'>Quantity:{quantity}</p>
                <p className='mb-1'>Supplier:{supplier}</p>
                <p><small>Description:{description}</small></p>
                <button className='btn btn-info w-100' onClick={handleDelivered}>Delivered</button>
            </div>

            <div className='mt-5 w-50 mx-auto'>
                <form onSubmit={handleRestock}>
                    <input className='w-50' type="text" name="restock" id="" />
                    <input type="submit" value="Restock" />
                </form>
            </div>
        </div>
    );
};

export default Item;