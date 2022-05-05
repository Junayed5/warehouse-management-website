import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {


    const handleCreateAnAccount = event => {
        event.preventDefault();
    }

    return (
        <div className='w-50 mx-auto text-start'>
            <h2 className='text-center'>Please Create a new account</h2>
            <Form onSubmit={handleCreateAnAccount}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <p>Already have an account <Link to='/login'><button className='btn btn-link text-decoration-none'>Please Login</button></Link></p>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;