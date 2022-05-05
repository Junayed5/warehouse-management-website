import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to='/manageAll'>
                <button className='btn btn-success m-3'>Manage All Inventories</button>
            </Link>
        </div>
    );
};

export default Products;