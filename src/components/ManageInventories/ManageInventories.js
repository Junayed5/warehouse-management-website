import React from 'react';
import UseProducts from '../../hooks/UseProducts';
import AllItem from '../AllItem/AllItem';

const ManageInventories = () => {
    const [products] = UseProducts();
    return (
        <div className='container'>
            <h1>All data:{products.length}</h1>
            <div className='row'>
            {
                products.map(product => <AllItem key={product._id} product={product}/>)
            }
            </div>
        </div>
    );
};

export default ManageInventories;