import React from 'react';
import UseProducts from '../../hooks/UseProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products] = UseProducts();
    return (
        <div className='container'>
            <h2>Products:{products.length}</h2>
            <div className='row'>
                {
                    products.map(product =><Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;