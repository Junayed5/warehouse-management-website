import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItem, setMyItem] = useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `https://furniture-warehouse.onrender.com/newItem?email=${email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMyItem(data));
    },[myItem]);

    const handleDeleteItem = id => {
        const confirm = window.confirm('Are you sure');
        if (confirm) {
            const url = `https://furniture-warehouse.onrender.com/newItem/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = myItem.filter(product => product._id !== id);
                setMyItem(remaining);
            })
        }

        if (confirm) {
            const url = `https://furniture-warehouse.onrender.com/products/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = myItem.filter(product => product._id !== id);
                setMyItem(remaining);
            })
        }
    }

    return (
        <div>
            <h3>My item: {myItem.length}</h3>
            {
                myItem.map(item => <div className='border w-25 mx-auto' key={item._id}>
                    <img src={item.img} alt="" />
                    <h4>{item.name}</h4>
                    <p>Price:{item.price}</p>
                    <button onClick={() => handleDeleteItem(item._id)} className='btn btn-danger'>Delete</button>
                </div>)
            }
        </div>
    );
};

export default MyItem;