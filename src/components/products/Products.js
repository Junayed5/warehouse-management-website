import React from 'react';
import UseProducts from '../../hooks/UseProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products] = UseProducts();
    const showProducts = products.slice(0,6);

    return (
        <div className='container mt-5'>
            <h2>Products</h2>
            <div className='row'>
                {
                    showProducts.map(product =><Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;