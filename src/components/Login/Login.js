import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {


    const handleSignIn = event => {
        event.preventDefault();
    }

    return (
        <div className='w-50 mx-auto text-start'>
            <h1 className='text-center'>Please login</h1>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <p>Create an account <Link to='/register'><button className='btn btn-link text-decoration-none'>Please Register</button></Link></p>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <SocialLogin/>
            </Form>
        </div>
    );
};

export default Login;