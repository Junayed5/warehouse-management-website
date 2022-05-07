import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItem, setMyItem] = useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `https://protected-coast-77549.herokuapp.com/products?email=${email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMyItem(data));
    },[myItem])
    return (
        <div>
            <h3>My item: {myItem.length}</h3>
            {
                myItem.map(item => <div key={item._id}>
                    <h4>{item.name}</h4>
                </div>)
            }
        </div>
    );
};

export default MyItem;