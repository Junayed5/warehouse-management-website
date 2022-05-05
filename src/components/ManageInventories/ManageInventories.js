import React from 'react';
import UseProducts from '../../hooks/UseProducts';

const ManageInventories = () => {
    const [products] = UseProducts();
    return (
        <div>
            <h1>All data:{products.length}</h1>
        </div>
    );
};

export default ManageInventories;