import React from 'react';
import UseProducts from '../../hooks/UseProducts';
import AllItem from '../AllItem/AllItem';

const ManageInventories = () => {
    const [products, setProducts] = UseProducts();

    const handleItemDelete = id => {
        const confirm = window.confirm('Are you sure?')
        if (confirm) {
            const url = `https://protected-coast-77549.herokuapp.com/products/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
        }
    }

    return (
        <div className='container'>
            <h1>All data:{products.length}</h1>
            <div className='row'>
            {
                products.map(product => <AllItem key={product._id} product={product} handleItemDelete={handleItemDelete}/>)
            }
            </div>
        </div>
    );
};

export default ManageInventories;