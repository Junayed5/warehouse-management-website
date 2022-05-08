import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    let errorMessage;

    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading/>
    }
    if (error) {
        errorMessage = <p className='text-danger'>{error.message}</p>
    }

    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email,password);
        toast('Login Success')
    }

    return (
        <div className='w-50 mx-auto text-start'>
            <h1 className='text-center'>Please login</h1>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                <p>Create an account <Link to='/register'><button className='btn btn-link text-decoration-none'>Please Register</button></Link></p>
                {errorMessage}
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <SocialLogin/>
            </Form>
            <ToastContainer/>
        </div>
    );
};

export default Login;