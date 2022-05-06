import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Product = (props) => {
    const [user,loading] = useAuthState(auth);

    if (loading) {
        return <Loading/>
    }
    const {_id, name, img, price, quantity, description,supplier } = props.product
    return (
        <div className='col-lg-4 border'>
            <div>
                <img className='w-100' src={img} alt="" />
            </div>
            <div>
                <p><b>Name:{name}</b></p>
                <p>Price:{price}</p>
                <p><small>Quantity:{quantity}</small></p>
                <p><i>{description}</i></p>
                <p><small>Supplier:{supplier}</small></p>
                <Link to={`/product/${_id}`}>
                    <button className='btn btn-secondary w-75 mb-3'>Manage</button>
                </Link>
            </div>
        </div>
    );
};

export default Product;