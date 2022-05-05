import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
    const searchId = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const id = searchId.productId;
        const url = `https://protected-coast-77549.herokuapp.com/product/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [searchId.productId])
    return (
        <div>
            <h1>Name:{product.name}</h1>
        </div>
    );
};

export default Item;