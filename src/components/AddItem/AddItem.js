import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    // const navigate = useNavigate();

    const handleAddItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const supplier = event.target.supplier.value;
        const img = event.target.url.value;
        
        const addItem = { name,email, price, quantity, description, supplier, img }

        fetch('https://protected-coast-77549.herokuapp.com/products', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addItem),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            });
        fetch('https://protected-coast-77549.herokuapp.com/newItem', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addItem),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
        
        
    }

    return (
        <div>
            <h2>Add Item</h2>
            <form className='w-50 mx-auto' onSubmit={handleAddItem}>
                <input className='w-100 m-2' type="text" value={user.email} name="email" id="" placeholder='Product name' disabled/><br />
                <input className='w-100 m-2' type="text" name="name" id="" placeholder='Product name' /><br />
                <input className='w-100 m-2' type="text" name="price" id="" placeholder='Price' /><br />
                <input className='w-100 m-2' type="text" name="quantity" id="" placeholder='Quantity' /><br />
                <input className='w-100 m-2' type="text" name="description" id="" placeholder='Description' /><br />
                <input className='w-100 m-2' type="text" name="supplier" id="" placeholder='Supplier Name' /><br />
                <input className='w-100 m-2' type="text" name="url" id="" placeholder='Image URl' /><br />
                <input type="submit" value="Add New" />
            </form>
        </div>
    );
};

export default AddItem;