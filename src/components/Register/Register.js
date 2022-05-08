import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    let errorMessage;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    if (user) {
        toast('Email verification sent');
    }

    if (loading) {
        return <Loading/>
    }
    if (error) {
        errorMessage = <p>{error.message}</p>
    }
    
    const handleCreateAnAccount = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email,password);
        toast('Email verification sent');
    }

    return (
        <div className='w-50 mx-auto text-start'>
            <h2 className='text-center'>Please Create a new account</h2>
            <Form onSubmit={handleCreateAnAccount}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                <p>Already have an account <Link to='/login'><button className='btn btn-link text-decoration-none'>Please Login</button></Link></p>
                {errorMessage}
                <Button className='w-50' variant="info" type="submit">
                    Register
                </Button>
                <SocialLogin/>
            </Form>
            <ToastContainer/>
        </div>
    );
};

export default Register;